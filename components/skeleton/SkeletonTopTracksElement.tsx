import { Skeleton } from "./Skeleton"

export const TopTracksElementSkeleton = () => {
  return (
    <div>
      <Skeleton className="w-[10ch] mb-[14px]"/>
      <div className="grid grid-cols-[repeat(4,1fr)] gap-[10px]">
        {[...Array(4)].map((_,i) => <SkeletonTrack key={i} />)}
      </div>
    </div>
  )
}

const SkeletonTrack = () => {
  return (
    <div className="flex flex-col gap-[10px]">
      <Skeleton className="w-full h-auto aspect-square"/>
      <div>
        <Skeleton size={'default'} className="w-3/4 mb-1"/>
        <Skeleton size={'sm'} className="w-1/2"/>
      </div>
    </div>
  )
}