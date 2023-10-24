'use client'

import Link from "next/link"
import NowPlaying from "./NowPlaying"
import Image from "next/image"
import { Container } from "./Container"
import { useRef } from 'react'

export const PlayerTemplate = ({ data }: { data: NowPlaying }) => {
  const indicatorRef = useRef(null)

  return (
  <Container padding={"small"}> 
    <Link href={ data?.songUrl } target="_blank" className="block">
      <div
      className="flex gap-4">
        <div
          className={`relative w-[60px] select-none aspect-square shrink-0 rounded-[13px] overflow-hidden`}>
          <Image
            alt={'track cover image'}
            src={data.albumImageUrl as string}
            fill
            sizes="(max-width: 770px) 10vw, 20vw"
            className="object-fill absolute"
          />
        </div>
        <div className="overflow-hidden relative flex-1 [mask-image:linear-gradient(to_right,black_80%,transparent_95%)]">
          <h2 className="font-primary truncate text-clip text-md">{data.title}</h2>
          <p className="font-secondary truncate text-clip text-base">{data.artist}</p>
        </div>
      </div>
    </Link>
  </Container>
  )
}