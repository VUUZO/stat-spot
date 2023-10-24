import { Skeleton } from "./Skeleton"

export const RecentlyPlayedSkeleton = () => {
  return (
    <>
    <Skeleton className=" w-[23ch]"/>
    <div className="grid gap-[10px]">
      {[...Array(12)].map((_,i) => <SkeletonTrack key={i} />)}
    </div>
    </>
  )
}

const SkeletonTrack = () => {
  return (
    <div className="flex gap-[10px] items-start w-full">
      <Skeleton className="w-16 h-16"/>
      <div className="flex-1">
        <Skeleton size={'default'} className="w-[20ch] mb-1"/>
        <Skeleton size={'sm'} className="w-[14ch]"/>
      </div>
      <Skeleton size={"sm"} className="w-[10ch]"/>
    </div>
  )
}
