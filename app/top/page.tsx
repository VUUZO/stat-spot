'use client'

import fetcher from "@/lib/fetcher"
import Image from "next/image"
import Link from "next/link"
import useSWR from "swr"

import { SkeletonTracks } from "@/components/skeleton/SkeletonTracks"
import { Grid } from "@/components/Grid"
import { useTermContext } from "../context/term-context"
import { useTopValues } from "../context/top-values-context"

export type Track = {
  title: string
  songUrl: string
  albumImageUrl: string
  artist: string
  track_id: string
}

export type Artist = {
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
  return (
    <>
    {data?.map((artist, idx) => (
      <li key={artist.name}>
        <Link href={`/artist/${artist.id}`}>
          <div className="flex flex-col gap-[5px] sm:gap-[10px]">
            <div className="aspect-square w-full select-none relative overflow-hidden rounded-md border-2 border-gray-neutral border-opacity-75">
              <Image src={artist.imageUrl} alt={artist.name}
                sizes="(max-width: 400px) 115px, (max-width:600px) 200px, 300px"
                fill
                className='object-cover absolute'
              />
            </div>
            <div>
              <h3 className="font-primary truncate text-base sm:text-md"><span className="text-primary">{idx + 1}.</span> {artist.name}</h3>
            </div>
          </div>
        </Link>
      </li>
    ))}
    </>
  )
}

const ShowTracks = ({ data }: { data: Track[] }) => {
  return (
    <>
    {data?.map((track, idx) => (
      <li key={track.title}>
        <Link href={`/track/${track.track_id}`}>
          <div className="flex flex-col gap-[5px] sm:gap-[10px]">
            <div className="aspect-square select-none w-full relative overflow-hidden rounded-md border-2 border-gray-neutral border-opacity-75">
              <Image src={track.albumImageUrl} alt={track.title}
              sizes="(max-width: 400px) 115px, (max-width:600px) 200px, 300px"
              fill
              className='object-cover absolute' />
            </div>
            <div className="[mask-image:linear-gradient(to_right,black_80%,transparent_95%)]">
              <h3 className="font-primary truncate text-clip text-base sm:text-md"><span className="text-primary">{idx + 1}.</span> {track.title}</h3>
              <p className="font-secondary truncate text-clip text-zinc-300 text-sm sm:text-base">{track.artist}</p>
            </div>
          </div>
        </Link>
      </li>
    ))}
    </>
  )
}