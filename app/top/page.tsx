'use client'

import fetcher from "@/lib/fetcher"
import Image from "next/image"
import Link from "next/link"
import useSWR from "swr"

import { SkeletonTracks } from "@/components/skeleton/SkeletonTracks"
import { Grid } from "@/components/Grid"
import { useTermContext } from "../context/term-context"
import { useTopValues } from "../context/top-values-context"

type Track = {
  title: string
  songUrl: string
  albumImageUrl: string
  artist: string
  track_id: string
}

type Artist = {
  name: string
  id: string
  imageUrl: string
  artistUrl: string
}

const Page = () => {
  const { term } = useTermContext()
  const { value } = useTopValues()

  const {
    data,
    isLoading,
    error
  } = useSWR(`/api/top-${value}?term=${term}`, fetcher, {
    // revalidateIfStale: false,
    // revalidateOnReconnect: false
    revalidateOnFocus: false,
    refreshInterval: 3600000,
    refreshWhenHidden: false
  })
  
  return (
    isLoading ? (
      <SkeletonTracks />
    ) : error ? (
      <p className="text-red-500 bg-red-400 bg-opacity-30 p-[10px] leading-none">There was an error</p>
    ) : (
        <Grid>
            {
              value === 'tracks'
              ? <ShowTracks data={data as Track[]} />
              : (
                  value === 'artists'
                  ? <ShowArtists data={data as Artist[]} />
                  : null
                )
            }
        </Grid>
    )
  )
}

export default Page


const ShowArtists = ({ data }: { data: Artist[] }) => {
  console.log(data[0].name, data[0].id)


  return (
    <>
    {data?.map((artist, idx) => (
      <li key={artist.name}>
        <Link href={`/artist/${artist.id}`}>
          <div className="flex flex-col gap-2 sm:gap-4">
            <div className="aspect-square w-full relative overflow-hidden rounded-md border-2 border-gray-neutral border-opacity-75">
              <Image src={artist.imageUrl} alt={artist.name} fill className='object-cover absolute' />
            </div>
            <div>
              <h3 className="font-primary truncate text-xl sm:text-[32px]"><span className="text-green">{idx + 1}.</span> {artist.name}</h3>
            </div>
          </div>
        </Link>
      </li>
    ))}
    </>
  )
}

const ShowTracks = ({ data }: { data: Track[] }) => {
  console.log(data[0].title, data[0].artist)
  

  return (
    <>
    {data?.map((track, idx) => (
      <li key={track.title}>
        <Link href={`/track/${track.track_id}`}>
          <div className="flex flex-col gap-2 sm:gap-4">
            <div className="aspect-square w-full relative overflow-hidden rounded-md border-2 border-gray-neutral border-opacity-75">
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
    </>
  )
}