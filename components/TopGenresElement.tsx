'use client'

import { useTermContext } from "@/app/context/term-context"
import fetcher from "@/lib/fetcher"
import Image from "next/image"
import useSWR from "swr"
import Link from "next/link"
import { SwiperSlide, Swiper } from 'swiper/react';

export const GenresElement = ({ limit = 10 }: {limit?: number}) => {
  const { term } = useTermContext()
  
  const {
    data,
    isLoading,
    error
  } = useSWR(`/api/genres?limit=${limit}&term=${term}`, fetcher, {
    revalidateOnFocus: false,
    refreshInterval: 3600000,
    refreshWhenHidden: false
  })

  const genres = data as string[]

  return (
    isLoading ? (
      <p>loading...</p>
    ) : error ? (
      <p className="text-red-500 bg-red-400 bg-opacity-30 p-[10px] leading-none">There was an error</p>
    ) : (
      <div>
        <h2 className="pb-mobile">Top artists</h2>
        
        <Swiper
          spaceBetween={'10px'}
          slidesPerGroupAuto={true}
        >
          {genres.map((genre, idx) => (
            <SwiperSlide>
              <div className="bg-red-600 inline-block">{genre}</div>
            </SwiperSlide>  
          ))}
      </Swiper>

      </div>
    )
  )
}