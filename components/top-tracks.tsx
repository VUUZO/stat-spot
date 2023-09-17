'use client'

import fetcher from "@/lib/fetcher"
import Image from "next/image"
import useSWR from "swr"

type Track = {
  title: string
  songUrl: string
  albumImageUrl: string
  artist: string
}

const TopTracks = () => {
  
  const { data: tracks, isLoading, error } = useSWR<Track[]>('/api/top-tracks', fetcher)
  return (
    isLoading ? (
      <div></div>
    ) : error ? (
      <p>There was an error</p>
    ) : (
      <>
        <h2 className="py-4 uppercase font-bold">Top tracks:</h2>
        <ul className="flex flex-col gap-2">
          {
            tracks?.map((track, idx) => (
              
              <li key={track.title}>
                <div className="flex gap-3 items-start">
                  <div className="aspect-square w-[50px] relative shrink-0 overflow-hidden rounded-md">
                    <Image src={track.albumImageUrl} alt={track.title} fill className='object-cover absolute' />
                  </div>
                  <div>
                    <h3 className="font-semibold">{track.title}</h3>
                    <p>{track.artist}</p>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </>
    )
  )
}

export default TopTracks