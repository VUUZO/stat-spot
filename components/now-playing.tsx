'use client'

import fetcher from "@/lib/fetcher"
import Image from "next/image"
import Link from "next/link"
import useSWR from "swr"

type NowPlaying = {
  title: string
  songUrl: string
  albumImageUrl: string
  artist: string
  isPlaying: boolean
}

const NowPlaying = () => {
  const { data: playing, error, isLoading } = useSWR<NowPlaying>('/api/listening', fetcher)
  return (
        isLoading ? (
          <div></div>
        ) : error ? (
          <div>There was an error.</div>
        ) : (
          <>
            {
              playing?.isPlaying ? (
                <>
                <h2 className="py-4 uppercase font-bold flex items-center gap-2"><span>Now playing</span> <div className="w-2 aspect-square bg-red-600 rounded-full animate-pulse" /></h2>

                <Link href={playing.songUrl} target="_blank" className="inline-block">
                  <div className="flex flex-col sm:flex-row gap-5 items-start">
                    <div className="relative w-[120px] aspect-square shrink-0 rounded-3xl overflow-hidden">
                      <Image alt={'sraka'} src={playing?.albumImageUrl as string} fill className="object-fill absolute"/>
                    </div>
                    <div>
                      <h2 className="font-semibold text-4xl">{playing?.title}</h2>
                      <p className="text-xl">{playing?.artist}</p>
                    </div>
                  </div>
                </Link>
                </>
              ) : (
                <h2 className="py-4 uppercase font-bold">Not listening to anything</h2>
              )
            }
          </>
        )
  )
}

export default NowPlaying