import { Container } from "../Container"
import { Skeleton } from "./Skeleton"

const NowPlayingSkeleton = () => {
  return (
    <Container padding={'small'}>
      <div className="flex gap-4">
        <Skeleton className="h-[60px] w-[60px] rounded-[13px]"/>
        <div>
          <Skeleton size={"md"} className="w-2/3 mt-1 mb-1"/>
          <Skeleton size={'default'} className="w-[20ch]" />
        </div>
      </div>
    </Container>
  )
}

export default NowPlayingSkeleton