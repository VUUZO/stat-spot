'use client'

import fetcher from "@/lib/fetcher"
import useSWR from "swr"
import { PlayerTemplate } from "./PlayerTemplate"
import NowPlayingSkeleton from "./skeleton/SkeletonNowPlaying"

type NowPlaying = {
  title: string
  songUrl: string
  albumImageUrl: string
  artist: string
  isPlaying: boolean
}

const recent: NowPlaying = {
  title: "HYAENA",
  songUrl: "https://open.spotify.com/track/0hL9gOw6XBWsygEUcVjxEc",
  albumImageUrl: "https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44",
  artist: "Travis Scott",
  isPlaying: false,
}

const NowPlaying = () => {
  const {
    data: playing,
    isLoading,
    error
  } = useSWR<NowPlaying>('/api/listening', fetcher)

  let currentImage = playing?.isPlaying ? playing.albumImageUrl : recent.albumImageUrl

  return (
        isLoading ? (
          <NowPlayingSkeleton />
        ) : error ? (
          <div>There was an error</div>
        ) : (
          <>
            {
              playing?.isPlaying ? (
                <>
                  <PlayerTemplate data={playing}/>
                </>
              ) : (
                <>
                  <PlayerTemplate data={recent}/>
                </>
              )
            }
          </>
        )
  )
}

export default NowPlaying