import { useRouter } from 'next/router'
import React, { useMemo, useState, useEffect } from 'react'
import _ from 'underscore'
import getVideos, { type TwitchVideo } from './api/twitchVideos'

export default function VideoPlayerPage (): JSX.Element {
  const router = useRouter()
  const channelId = useMemo(() => {
    if (_.isString(router.query.twitchId)) return router.query.twitchId
    return ''
  }, [router.query])

  const [videos, setVideos] = useState<TwitchVideo[]>([])
  useEffect(() => {
    const fetchVideos = async (): Promise<void> => {
      const fetchedVideos = await getVideos(channelId)
      setVideos(fetchedVideos)
    }
    void fetchVideos()
  }, [channelId])

  return (
    <div>
      <h1>Video Player {channelId}</h1>
      {videos.length > 0
        ? (
        <div>
          <iframe
            src={`https://player.twitch.tv/?video=${videos[0].id}&parent=localhost:3000`}
            allowFullScreen
          ></iframe>
        </div>
          )
        : (
        <p>Loading...</p>
          )}
    </div>
  )
}
