/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios, { type AxiosResponse } from 'axios'

export interface TwitchVideo {
  id: string
  title: string
  url: string
  thumbnailUrl: string
}

async function getTwitchAccessToken (): Promise<AxiosResponse<{ access_token: string, expires_in: number, token_type: string }, any>> {
  const response = await axios.post(`https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`)
  console.log({ response })
  return response
}
export async function getVideos (channelId: string): Promise<TwitchVideo[]> {
  const { access_token } = (await getTwitchAccessToken()).data
  const response = await axios.get('https://api.twitch.tv/helix/videos', {
    params: {
      user_id: channelId,
      first: 10,
      type: 'archive',
      sort: 'time'
    },
    headers: {
      'Client-ID': process.env.TWITCH_CLIENT_ID,
      Authorization: `Bearer ${access_token}`
    }
  })

  const videos = response.data.data.map((item: any) => ({
    id: item.id,
    title: item.title,
    url: item.url,
    thumbnailUrl: item.thumbnail_url
  }))

  return videos
}
export default getVideos
