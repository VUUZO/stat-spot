import NowPlaying from "@/components/now-playing";
import TopTracks from "@/components/top-tracks";

export default function Home () {
   return (
    <div className="p-8">
      <NowPlaying />
      <TopTracks />
    </div>
  )
}