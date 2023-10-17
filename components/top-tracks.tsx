'use client'

import fetcher from "@/lib/fetcher"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import useSWR from "swr"

type Track = {
  title: string
  songUrl: string
  albumImageUrl: string
  artist: string
  track_id: string
}
const buttons = [
  { name: '4 weeks', id: 0, term: 'short_term' },
  { name: '6 months', id: 1, term: 'medium_term' },
  { name: 'All time', id: 2, term: 'long_term' },
]

const TopTracks = () => {
  const [term, setTerm] = useState('short_term')

  const {
    data: tracks,
    isLoading,
    error
  } = useSWR<Track[]>(`/api/top-tracks?term=${term}`, fetcher)

  return (
    isLoading ? (
      <div></div>
    ) : error ? (
      <p>There was an error</p>
    ) : (
      <>
        <ul>
          {buttons.map(button => <li key={button.id}><button onClick={() => setTerm(button.term)}>{button.name}</button></li>)}
        </ul>
        <ul className="grid gap-3 grid-cols-3 lg:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
          {
            tracks?.map((track, idx) => (
              <li key={track.title}>
                <Link href={`/track/${track.track_id}`}>
                  <div className="flex flex-col gap-2 sm:gap-4">
                    <div className="aspect-square w-full relative overflow-hidden rounded-md border-2 border-dark-light">
                      <Image src={track.albumImageUrl} alt={track.title} fill className='object-cover absolute' />
                    </div>
                    <div>
                      <h3 className="font-primary truncate text-xl sm:text-[32px]"><span className="text-green">{idx + 1}.</span> {track.title}</h3>
                      <p className="font-secondary truncate text-zinc-300 text-xs sm:text-base">{track.artist}</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))
          }
        </ul>
      </>
    )
  )
}

export default TopTracks