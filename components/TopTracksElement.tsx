'use client'

import { useTermContext } from "@/app/context/term-context"
import fetcher from "@/lib/fetcher"
import Image from "next/image"
import useSWR from "swr"
import Link from "next/link"
import { SwiperSlide } from 'swiper/react';
import { SwiperContainer } from "./Swiper"
import { TopTracksElementSkeleton } from "./skeleton/SkeletonTopTracksElement"

export const TracksElement = ({ limit = 10 }: {limit?: number}) => {
  const { term } = useTermContext()
  
  const {
    data,
    isLoading,
    error
  } = useSWR(`/api/top-tracks?limit=${limit}&term=${term}`, fetcher, {
    revalidateOnFocus: false,
    refreshInterval: 3600000,
    refreshWhenHidden: false
  })

  type Track = {
    artist: string
    songUrl: string
    title: string
    albumImageUrl: string
    term: string
    track_id: string
  }

  const tracks = data as Track[]

  return (
    isLoading ? (
      <TopTracksElementSkeleton />
    ) : error ? (
      <p className="text-red-500 bg-red-400 bg-opacity-30 p-[10px] leading-none">There was an error</p>
    ) : (
      <div>
        <h2 className="pb-mobile pl-1">Top tracks</h2>
        <SwiperContainer>
          {tracks.map((track, idx) => (
            <SwiperSlide key={idx}>
              <Link href={`/track/${track.track_id}`}>
                <div className="flex flex-col gap-[5px] sm:gap-[10px]">
                  <div className="aspect-square w-full select-none relative overflow-hidden rounded-md border-2 border-gray-neutral border-opacity-75">
                    <Image src={track.albumImageUrl} alt={track.title} fill className='object-cover absolute' />
                  </div>
                  <div className="[mask-image:linear-gradient(to_right,black_80%,transparent_95%)]">
                    <h3 className="font-primary truncate text-clip text-base sm:text-md"><span className="text-primary">{idx + 1}.</span> {track.title}</h3>
                    <p className="font-secondary truncate text-clip text-zinc-300 text-sm sm:text-base">{track.artist}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>  
          ))}
        </SwiperContainer>
      </div>
    )
  )
}