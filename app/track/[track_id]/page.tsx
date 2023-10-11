'use client'

import fetcher from "@/lib/fetcher"
import Image from "next/image"
import useSWR from "swr"

type Track = {
  album: {
    href: string
    name: string
    release_date: string
  },
  name: string
  artist: string
  id: string
  popularity: number
  songImg: string
  songUrl: string
}

const Page = ({ params }: { params: { track_id: string } }) => {
  const { track_id } = params
  const { data: track, isLoading, error } = useSWR<Track>(`/api/track?track_id=${track_id}`, fetcher)

  const dateFormatter =
  (date: string | number)=>
  new Intl.DateTimeFormat('en', { dateStyle:"medium" }).format(new Date(date))

  return (
    isLoading ? (<div>Fetching track details...</div>)
    : error ? (<div>Error has occured</div>)
    : (
      <div>
        <div>
          <div className="relative w-full border-2 rounded-md overflow-hidden border-dark-light aspect-square">
            <Image
              src={track?.songImg!}
              alt='txt'
              fill
              className="object-cover absolute"/>
          </div>
          <p>{track?.album.name} · {dateFormatter(track?.album.release_date!)}</p>
        </div>
        <div>
          <h2 className="text-7xl">{track?.name}</h2>
          <h3>{track?.artist}</h3>
        </div>
      </div>
    )
  )
}

export default Page