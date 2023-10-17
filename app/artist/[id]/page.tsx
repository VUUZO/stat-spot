'use client'

import { Container } from "@/components/Container"
import { SkeletonArtistDetails } from "@/components/skeleton/SkeletonArtistDetails"
import fetcher from "@/lib/fetcher"
import { formatNumber } from "@/lib/utils"
import Image from "next/image"
import useSWR from "swr"

type Artist = {
  name: string
  imgUrl: string
  spotifyUrl: string
  popularity: string
  followers: number
  genres: string[]
}

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params
  const { data: artist, isLoading, error } = useSWR<Artist>(`/api/artist?id=${id}`, fetcher)

  return (
    isLoading ? (<SkeletonArtistDetails />)
    : error ? (<div>Error has occured</div>)
    : (
      <>
        <div>
          <div className="relative mx-auto max-w-[270px] border-2 rounded-[16px] overflow-hidden border-gray-neutral/70 aspect-square shadow-lg">
            <Image
              src={artist?.imgUrl!}
              alt='track image'
              fill
              className="object-cover absolute"
            />
          </div>
        </div>

        <div className="py-2 px-mobile">
          <section>
            <h2 className="text-md text-white pb-[5px]">{artist?.name}</h2>
            <h3 className="text-gray-light pb-[10px]">{formatNumber(artist?.followers!)} followers</h3>
          </section>
          <section className="flex flex-wrap gap-2 pb-[5px]">
            {artist?.genres.map((genre, index, arr) => (
              <div key={genre} className="font-secondary inline-block bg-gray-lighter/10 border border-gray-light/10 py-[2px] px-2 rounded text-sm">
                {genre}
              </div>
            ))}
          </section>
        </div>

        <Container className="h-screen">

        </Container>
      </>
    )
  )
}

export default Page