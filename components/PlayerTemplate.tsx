import Link from "next/link"
import NowPlaying from "./now-playing"
import Image from "next/image"

export const PlayerTemplate = ({ data }: { data: NowPlaying }) => {
  return (
    <Link href={ data?.songUrl } target="_blank" className="inline-block">
    <div className="flex flex-col sm:flex-row gap-5 items-start">
      <div className="relative w-[120px] aspect-square shrink-0 rounded-full overflow-hidden">
        <Image alt={'sraka'} src={data.albumImageUrl as string} fill className="object-fill absolute"/>
      </div>
      <div>
        <h2 className="font-primary leading-[48px] text-[40px]">{data.title}</h2>
        <p className="font-secondary leading-[19px]">{data.artist}</p>
      </div>
    </div>
  </Link>
  )
}