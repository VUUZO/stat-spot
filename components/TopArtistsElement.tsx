'use client'

import { useTermContext } from "@/app/context/term-context"
import fetcher from "@/lib/fetcher"
import Image from "next/image"
import useSWR from "swr"
import Link from "next/link"
import { SwiperSlide } from 'swiper/react';
import { SwiperContainer } from "./Swiper"
import { Artist } from "@/app/top/page"

export const ArtistsElement = ({ limit = 10 }: {limit?: number}) => {
  const { term } = useTermContext()
  
  const {
    data,
    isLoading,
    error
  } = useSWR(`/api/top-artists?limit=${limit}&term=${term}`, fetcher, {
    revalidateOnFocus: false,
    refreshInterval: 3600000,
    refreshWhenHidden: false
  })

  const artists = data as Artist[]

  return (
    isLoading ? (
      <p>loading...</p>
    ) : error ? (
      <p className="text-red-500 bg-red-400 bg-opacity-30 p-[10px] leading-none">There was an error</p>
    ) : (
      <div>
        <h2 className="pb-mobile">Top artists</h2>
        
        <SwiperContainer>
          {artists.map((artist, idx) => (
            <SwiperSlide>
              <Link href={`/artist/${artist.id}`}>
                <div className="flex flex-col gap-[5px] sm:gap-[10px]">
                  <div className="aspect-square w-full relative overflow-hidden rounded-md border-2 border-gray-neutral border-opacity-75">
                    <Image src={artist.imageUrl} alt={artist.name} fill className='object-cover absolute' />
                  </div>
                  <div className="[mask-image:linear-gradient(to_right,black_80%,transparent_95%)]">
                    <h3 className="font-primary truncate text-clip text-base sm:text-md"><span className="text-primary">{idx + 1}.</span> {artist.name}</h3>
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