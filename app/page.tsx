import { Container } from "@/components/Container";
import NowPlaying from "@/components/NowPlaying";
import { RecentlyPlayed } from "@/components/RecentlyPlayed";
import { ArtistsElement } from "@/components/TopArtistsElement";
import { GenresElement } from "@/components/TopGenresElement";
import { TracksElement } from "@/components/TopTracksElement";

export default function Home () {
   return (
    <>
      <Container variant={'transparent'}>
        <NowPlaying />
      </Container>
      
      <Container className="flex flex-col gap-[20px] p-[14px]">
        {/* <ArtistsElement limit={15} /> */}
        {/* <GenresElement limit={20} /> */}
        <TracksElement limit={15} />
        <RecentlyPlayed limit={30}/>
      </Container>
    </>
  )
}