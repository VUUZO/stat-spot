import Image from "next/image"
import { CurrentlyPlaying, getCurrentlyPlaying } from "./spotify"

export default async function Home () {
  
  const song = await getCurrentlyPlaying() as CurrentlyPlaying

  const favourite: CurrentlyPlaying = {
    artist: 'Travis Scott',
    title: 'THANK GOD',
    isPlaying: false,
    songUrl: "https://open.spotify.com/track/1PH2MDbcBAU094DlgTIND1",
    albumImageUrl:
    "https://i.scdn.co/image/ab67616d00001e02881d8d8378cd01099babcd44"
  }
  
  
   return (
    <div className="p-8">
      {
        song.isPlaying ? (
        <div className="flex gap-8 flex-wrap sm:flex-nowrap items-center p-4">
          <div className={`relative w-full sm:w-[80px] rounded-full aspect-square overflow-hidden`}>
            <Image alt='album picture' src={song.albumImageUrl} fill className={`object-cover absolute  ${song.isPlaying ? 'animate-spin' : ''}`}/>
          </div>
          <div className="text-center w-full sm:text-left">
            <h3 className="font-semibold text-2xl">{song.artist}</h3>
            <p className="text-lg">{song.title}</p>
          </div>
        </div>
        ) : (
          <div className="flex gap-8 flex-wrap sm:flex-nowrap items-center p-4">
          <div className={`relative w-full sm:w-[80px] rounded-[20px] aspect-square overflow-hidden`}>
            <Image alt='album picture' src={favourite.albumImageUrl} fill className={`object-cover absolute`}/>
          </div>
          <div className="text-center w-full sm:text-left">
            <h3 className="font-semibold text-2xl">{favourite.artist}</h3>
            <p className="text-lg">{favourite.title}</p>
          </div>
          </div>
        )
      }
    </div>
  )
}