'use client'

import { Container } from "@/components/Container"
import { Fragment } from "react"
import fetcher from "@/lib/fetcher"
import Image from "next/image"
import Link from "next/link"
import useSWR from "swr"
import { SkeletonTrackDetails } from "@/components/skeleton/SkeletonTrackDetails"
import { motion, useTransform, useScroll } from "framer-motion"

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
  const { data: track, isLoading, error } = useSWR<Track>(`/api/track?track_id=${track_id}`, fetcher, {
    revalidateOnFocus: false,
    refreshInterval: 3600000,
    refreshWhenHidden: false
  })
  
  const dateFormatter =
  (date: string | number)=>
  new Intl.DateTimeFormat('en', { year: 'numeric' }).format(new Date(date))

  return (
    isLoading ? (<SkeletonTrackDetails />)
    : error ? (<div>Error: {error}</div>)
    : (
      <>
        <div>
          <div
            className="relative mx-auto select-none max-w-[270px] border-2 rounded-[16px] overflow-hidden border-gray-neutral/70 aspect-square shadow-lg">
            <Image
              src={track?.songImg!}
              alt='track image'
              fill
              sizes="(max-width: 400px) 260px, 300px"
              priority
              className="object-cover absolute"
            />
          </div>
        </div>
        <div className="py-2 px-mobile z-20">
          <h2 className="text-md text-white pb-[5px]">{track?.name}</h2>
          <h3 className="text-base text-gray-light pb-[10px]">
            {track?.artists.map((artist, index, arr) => (
              <Fragment key={artist.id}>
                <Link
                  href={`/artist/${artist.id}`}
                  className="inline-block hover:text-gray-lighter hover:underline"
                >
                    {artist.name}
                </Link>
                {index < arr.length-1 && <span className="px-2">/</span>}
              </Fragment>
            ))}
          </h3>
          <p className="font-secondary">{dateFormatter(track?.album.release_date!)}</p>
        </div>
        {/* TRACK STATS */}
        <Container className="h-screen">

        </Container>
      </>
    )
  )
}

export default Page