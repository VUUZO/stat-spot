'use client'

import fetcher from "@/lib/fetcher"
import useSWR from "swr"
import { PlayerTemplate } from "./PlayerTemplate"

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
  isPlaying: false
}

const NowPlaying = () => {
  const {
    data: playing,
    isLoading,
    error
  } = useSWR<NowPlaying>('/api/listening', fetcher)
  
  return (
        isLoading ? (
          <div>Fetching data...</div>
        ) : error ? (
          <div>There was an error</div>
        ) : (
          <>
            {
              playing?.isPlaying ? (
                <>
                  <h2 className="py-4 uppercase font-bold flex items-center gap-2"><span>Now playing</span> <div className="w-2 aspect-square bg-red-600 rounded-full animate-pulse" /></h2>
                  <PlayerTemplate data={playing}/>
                </>
              ) : (
                <>
                  <h2 className="py-4 uppercase font-bold flex items-center gap-2">Recent track</h2>
                  <PlayerTemplate data={recent}/>
                </>
              )
            }
          </>
        )
  )
}

export default NowPlaying