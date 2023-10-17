import { Skeleton } from "./Skeleton"

export const SkeletonTrackDetails = () => {
  return (
    <>
      <div>
        <Skeleton rounded={"medium"} className="mx-auto h-[auto] w-[270px] aspect-square"/>
      </div>
      <div className="py-2 px-mobile">
        <Skeleton size={"lg"} className="mb-[5px] w-2/3"/>
        <Skeleton className="w-[20ch] mb-[10px]" />
        <Skeleton className="w-[7ch]"/>
      </div>
    </>
  )
}