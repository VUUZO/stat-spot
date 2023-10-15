import Link from "next/link"
import NowPlaying from "./NowPlaying"
import Image from "next/image"
import { Container } from "./Container"

export const PlayerTemplate = ({ data }: { data: NowPlaying }) => {
  return (
  <Container>
    <Link href={ data?.songUrl } target="_blank" className="block">
      <div className="flex gap-[20px] sm:flex-row md:gap-[32px] items-start">
        <div
          className={`relative w-[55px] md:w-[67px] aspect-square shrink-0 rounded-full overflow-hidden ${data.isPlaying ? 'animate-spin-track' : ''}`}>
          <Image
            alt={'track cover image'}
            src={data.albumImageUrl as string}
            fill
            sizes="(max-width: 770px) 10vw, 20vw"
            className="object-fill absolute"
          />
          <div className="absolute inset-0 z-10 rounded-full shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),inset_0_-1px_1px_0px_rgba(0,0,0,0.4)]"/>
          <div className="absolute inset-2 z-10 rounded-full shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]"/>
          <div className="absolute inset-5 z-10 rounded-full bg-black/30 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.3),inset_0_1px_1px_0px_rgba(0,0,0,0.4)]"/>
        </div>
        <div className="overflow-hidden">
          <h2 className="font-primary truncate text-[24px] md:leading-[48px] md:text-[40px]">{data.title}</h2>
          <p className="font-secondary truncate text-xs md:text-base md:leading-[19px]">{data.artist}</p>
        </div>
      </div>
    </Link>
  </Container>
  )
}