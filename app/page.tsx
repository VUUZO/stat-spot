import { Container } from "@/components/Container";
import NowPlaying from "@/components/NowPlaying";
import { Element } from "@/components/TopTracksElement";

export default function Home () {
   return (
    <>
      <Container variant={'transparent'}>
        <NowPlaying />
      </Container>
      
      <Container>
        <h2 className="text-base pb-[10px]">top tracks</h2>
        <Element limit={15} />
      </Container>
    </>
  )
}