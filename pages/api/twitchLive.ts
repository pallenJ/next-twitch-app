/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios, { type AxiosResponse } from 'axios'
import { type NextApiRequest, type NextApiResponse } from 'next'

interface AccessTokenResponse {
  access_token: string
  expires_in: number
  token_type: string
}

interface Stream {
  id: string
  user_id: string
  user_name: string
  game_id: string
  type: string
  title: string
  viewer_count: number
  started_at: string
  language: string
  thumbnail_url: string
  tag_ids: string[]
}

interface StreamsResponse {
  data: Stream[]
  pagination: {
    cursor: string
  }
}

const TWITCH_API_BASE_URL = 'https://api.twitch.tv/helix'

const getAccessToken = async (): Promise<string> => {
  const url = `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`
  const response: AxiosResponse<AccessTokenResponse> = await axios.post(url)
  return response.data.access_token
}

const getLiveStreams = async (accessToken: string, req: NextApiRequest): Promise<StreamsResponse> => {
  const url = `${TWITCH_API_BASE_URL}/streams?language=ko&user_login=${req.query.channelId}`
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Client-Id': process.env.TWITCH_CLIENT_ID
  }
  const response: AxiosResponse<StreamsResponse> = await axios.get(url, { headers })
  return response.data
}

export default async function handler (req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const accessToken = await getAccessToken()
    const liveStreams = await getLiveStreams(accessToken, req)
    res.status(200).json(liveStreams)
  } catch (error) {
    console.error(error)
    res.status(500).end()
  }
}
