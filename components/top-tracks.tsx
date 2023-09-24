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
  const {
    data: tracks,
    isLoading,
    error
  } = useSWR<Track[]>('/api/top-tracks', fetcher)

  return (
    isLoading ? (
      <div></div>
    ) : error ? (
      <p>There was an error</p>
    ) : (
      <>
        <h2 className="py-4 uppercase font-bold">Top tracks [4 weeks]:</h2>
        <ul className="grid gap-3 grid-cols-3 lg:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
          {
            tracks?.map((track, idx) => (
              
              <li key={track.title}>
                <div className="flex flex-col gap-2 sm:gap-4">
                  <div className="aspect-square w-full relative overflow-hidden rounded-md border-2 border-dark-light">
                    <Image src={track.albumImageUrl} alt={track.title} fill className='object-cover absolute' />
                  </div>
                  <div>
                    <h3 className="font-primary truncate text-xl sm:text-[32px]"><span className="text-green">{idx + 1}.</span> {track.title}</h3>
                    <p className="font-secondary truncate text-zinc-300 text-xs sm:text-base">{track.artist}</p>
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