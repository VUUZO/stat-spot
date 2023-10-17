'use client'

import { useTermContext } from "@/app/context/term-context"
import fetcher from "@/lib/fetcher"
import Image from "next/image"
import useSWR from "swr"
import { Skeleton } from "./skeleton/Skeleton"

export const Element = ({ limit = 10 }: {limit?: number}) => {
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
      <p>loading...</p>
    ) : error ? (
      <p className="text-red-500 bg-red-400 bg-opacity-30 p-[10px] leading-none">There was an error</p>
    ) : (
      <>
      <div className="flex gap-2 flex-nowrap overflow-x-scroll">
        {tracks.map((track, idx) => (

          <div key={track.track_id} className="min-w-[120px]">
            <div className="relative w-full aspect-square">
              <Image alt="image" src={track.albumImageUrl} fill className="object-fill absolute"/>
            </div>
            <div className="">
              <h2 className="truncate">{idx+1}. {track.title}</h2>
            </div>
          </div>

        ))}
      </div>
    </>
    )
  )
}