import { Container } from "@/components/Container";
import NowPlaying from "@/components/NowPlaying";

export default function Home () {
   return (
    <>
      <Container variant={'transparent'}>
        <NowPlaying />
      </Container>
      
      <Container>
        homepage
      </Container>
    </>
  )
}