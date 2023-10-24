'use client'

import { useTermContext } from "@/app/context/term-context"
import fetcher from "@/lib/fetcher"
import Image from "next/image"
import useSWR from "swr"
import Link from "next/link"
import { RecentTrack } from "@/app/api/recently-played/route"
import { getRelativeTime } from "@/lib/utils"
import { RecentlyPlayedSkeleton } from "./skeleton/SkeletonRecentlyPlayed"
import { motion } from 'framer-motion'

export const RecentlyPlayed = ({ limit }: {limit?: number}) => {
  const { term } = useTermContext()

  const {
    data,
    isLoading,
    error
  } = useSWR(`/api/recently-played`, fetcher, {
    revalidateOnFocus: false,
    refreshInterval: 3600000,
    refreshWhenHidden: false
  })

  const tracks = data as RecentTrack[]

  return (
    isLoading ? (
      <RecentlyPlayedSkeleton />
    ) : error ? (
      <p className="text-red-500 bg-red-400 bg-opacity-30 p-[10px] leading-none">There was an error</p>
    ) : (
      <div>
        <h2 className="pb-mobile">Recently played tracks</h2>
        
        <div className="grid gap-[10px]">
          {tracks.map((track: RecentTrack) => (
            <Link href={`/track/${track.id}`} key={track.played_at}>
            <motion.section whileTap={{
              scale: .98
            }} className="flex gap-[10px] items-start w-full">
              <div className="relative select-none aspect-square w-16 overflow-hidden shrink-0 rounded-md border-2 border-gray-neutral border-opacity-75">
                <Image alt="track image" src={track.imageUrl} className="object-cover absolute" fill sizes="70px" />
              </div>
              <div className="flex-1 flex-shrink overflow-hidden [mask-image:linear-gradient(to_right,black_80%,transparent_95%)]">
                <h2>{track.title}</h2>
                <p className="font-secondary text-sm">{track.artist}</p>
              </div>
              <div>
                <p className="text-sm font-secondary">{getRelativeTime(track.played_at)}</p>
              </div>
            </motion.section>
            </Link>
          ))}        
        </div>
      </div>
    )
  )
}