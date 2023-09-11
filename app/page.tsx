import Image from "next/image"
import { CurrentlyPlaying, Fav, getCurrentlyPlaying, getFavSongs } from "./spotify"

export default async function Home () {
  
  const song = await getCurrentlyPlaying() as CurrentlyPlaying
  const featured = await getFavSongs() as Fav
  
   return (
    <div className="p-8">
      {
        song.isPlaying && (<div className="flex gap-8 flex-wrap sm:flex-nowrap items-center p-4">
          <div className={`relative w-full sm:w-20 rounded-full aspect-square overflow-hidden`}>
            <Image alt='album picture' src={song.albumImageUrl} fill className={`object-cover absolute  ${song.isPlaying ? 'animate-spin' : ''}`}/>
          </div>
          <div className="text-center w-full sm:text-left">
            <h3 className="font-semibold text-2xl">{song.artist}</h3>
            <p className="text-lg">{song.title}</p>
          </div>
        </div>
        )
      }
      {
        !song.isPlaying && (
        <>
          <h2 className="mb-8 font-semibold uppercase text-center">[not listening to anything]</h2>
          <h2 className="mb-8 font-semibold uppercase text-center">[recent fav track]</h2>

          <div className="flex gap-8 flex-wrap sm:flex-nowrap items-center p-4">
          <div className={`relative w-full sm:w-20 rounded-3xl aspect-square overflow-hidden`}>
            <Image alt='album picture' src={featured.albumImageUrl} fill className={`object-cover absolute`}/>
          </div>
          <div className="text-center w-full sm:text-left">
            <h3 className="font-semibold text-2xl">{featured.artist}</h3>
            <p className="text-lg">{featured.title}</p>
          </div>
          </div>
        </>
      )
      }
    </div>
  )
}