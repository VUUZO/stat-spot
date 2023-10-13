'use client'

import fetcher from "@/lib/fetcher"
import Image from "next/image"
import Link from "next/link"
import useSWR from "swr"

type ArtistType = {
  name: string
  id: string
}

type Track = {
  album: {
    href: string
    name: string
    release_date: string
  },
  name: string
  artists: ArtistType[]
  id: string
  popularity: number
  songImg: string
  songUrl: string
}

const Page = ({ params }: { params: { track_id: string } }) => {

  const { track_id } = params
  const { data: track, isLoading, error } = useSWR<Track>(`/api/track?track_id=${track_id}`, fetcher)
  
  console.log(track?.artists)

  const dateFormatter =
  (date: string | number)=>
  new Intl.DateTimeFormat('en', { dateStyle:"medium" }).format(new Date(date))

  return (
    isLoading ? (<div>Fetching track details...</div>)
    : error ? (<div>Error has occured</div>)
    : (
      <div>
        <div>
          <div className="relative w-full border-2 rounded-[20px] overflow-hidden border-dark-light aspect-square">
            <Image
              src={track?.songImg!}
              alt='txt'
              fill
              className="object-cover absolute"/>
          </div>
          <p className="text-sm pt-[10px] text-zinc-400">{track?.album.name} · {dateFormatter(track?.album.release_date!)}</p>
        </div>
        <div className="py-5">
          <h2 className="text-3xl">{track?.name}</h2>
          <h3 className="pt-1 font-secondary text-xs">
            {track?.artists.map(artist => (
              <Link className="inline-block mr-2 hover:text-green hover:bg-green-light" key={artist.id} href={`/artist/${artist.id}`}>{artist.name}</Link>
            ))}
          </h3>
        </div>
      </div>
    )
  )
}

export default Page