'use client'

import Image from "next/image"
import useSWR from "swr"

export default function Home () {
  const fetcher = (url: string) => fetch(url).then(r => r.json())
  const { data: playing, error, isLoading } = useSWR('/api/listening', fetcher)
  
   return (
    <div className="p-8">
      {
        isLoading ? (
          <div></div>
        ) : error ? (
          <div>There was an error</div>
        ) : (
          <>
            {
              playing ? (
                <div>
                  <h2 className="font-semibold text-4xl">{playing.track.title}</h2>
                  <p>{playing.track.artist}</p>
                  <p>{playing.track.isPlaying ? 'playing...' : 'paused'}</p>
                </div>
              ) : (
                <p>not listening to any song</p>
              )
            }
          </>
        )
      }
    </div>
  )
}