'use client'

import fetcher from "@/lib/fetcher"
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import useSWR from "swr"
import { TermContext } from "./layout"
import { SkeletonTracks } from "@/components/skeleton/SkeletonTracks"
import { Grid } from "@/components/Grid"

type Track = {
  title: string
  songUrl: string
  albumImageUrl: string
  artist: string
  track_id: string
}

const Page = () => {
  const term = useContext(TermContext)

  const {
    data: tracks,
    isLoading,
    error
  } = useSWR<Track[]>(`/api/top-tracks?term=${term}`, fetcher)

  return (
    isLoading ? (
      <SkeletonTracks />
    ) : error ? (
      <p className="text-red-500 bg-red-400 bg-opacity-30 p-[10px] leading-none">There was an error</p>
    ) : (
        <Grid>
          {tracks?.map((track, idx) => (
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
            ))}
        </Grid>
    )
  )
}

export default Page