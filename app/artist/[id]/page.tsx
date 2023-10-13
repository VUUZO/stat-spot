'use client'

import fetcher from "@/lib/fetcher"
import Image from "next/image"
import useSWR from "swr"

type Artist = {
  name: string
  imgUrl: string
  spotifyUrl: string
  popularity: string
  followers: string
  genres: string
}

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params
  const { data: artist, isLoading, error } = useSWR<Artist>(`/api/artist?id=${id}`, fetcher)

  return (
    isLoading ? (<div>Fetching artist details...</div>)
    : error ? (<div>Error has occured</div>)
    : (
      <div className="flex gap-[10px]">
        <div className="flex-1">
          <div className="relative w-full border-2 rounded-[20px] overflow-hidden border-dark-light aspect-square">
            <Image
              src={artist?.imgUrl!}
              alt='txt'
              fill
              className="object-cover absolute"/>
          </div>
        </div>
        <div className="py-5 flex-1">

          <h2 className="text-3xl">{artist?.name}</h2>
          
          {/* @ts-ignore */}
          <h3 className="pt-1 font-secondary text-xs">{artist?.genres.map(genre => genre).join(', ')}</h3>
        </div>
      </div>
    )
  )
}

export default Page