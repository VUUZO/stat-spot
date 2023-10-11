import { Container } from "../Container"

const NowPlayingSkeleton = () => {
  return (
    <Container className="bg-dark bg-opacity-100 p-[20px] md:p-[32px]">
      <div className="block h-min">
        <div className="flex gap-[20px] sm:flex-row md:gap-[32px] items-start">
          <div className="relative w-[55px] bg-zinc-800 md:w-[67px] animate-pulse aspect-square shrink-0 rounded-full overflow-hidden"/>
          <div>
            <h2 className="font-primary h-[28px] rounded-lg text-[24px] animate-pulse md:leading-[48px] bg-zinc-800 md:text-[40px] w-[10ch]"/>
            <p className="font-secondary mt-2 h-[20px] rounded-lg text-xs animate-pulse md:text-base bg-zinc-800 md:leading-[19px] w-[8ch]"/>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default NowPlayingSkeleton