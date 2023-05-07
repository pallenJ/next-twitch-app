import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Grid } from '@mui/material'
import _ from 'underscore'
import { type NextPage } from 'next'

interface Channel {
  id: string
  display_name: string
  profile_image_url: string
  status: string
}

const ChannelPage: NextPage = (): JSX.Element => {
  const [channel, setChannel] = useState<Channel | null>(null)
  const router = useRouter()
  const { channelId } = router.query as { channelId: string }

  useEffect(() => {
    const fetchChannel = async (): Promise<void> => {
      try {
        const response = await axios.get<Channel>(
          `http://localhost:3000/api/twitchLive?channelId=${channelId}`
        )
        setChannel(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    if (_.isEmpty(channelId)) {
      void fetchChannel()
    }
  }, [channelId])

  if (channel == null) {
    return <div>Loading...</div>
  }

  return (
    <Grid>
      <div>
        <h1>{channel.display_name}</h1>
        <div>{channel.status}</div>
        <img src={channel.profile_image_url} alt="Profile" />
        <iframe
          src={`https://player.twitch.tv/?channel=${channelId}&parent=localhost`}
          height="720"
          width="1280"
          allowFullScreen={true}
          ></iframe>
      </div>
    </Grid>
  )
}

export default ChannelPage
