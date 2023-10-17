import { Skeleton } from "./Skeleton"

export const SkeletonArtistDetails = () => {
  return (
    <>
      <div>
        <Skeleton rounded={"medium"} className="mx-auto h-[auto] w-[270px] aspect-square"/>
      </div>
      <div className="py-2 px-mobile">
        <Skeleton size={"lg"} className="mb-[5px] w-[12ch]"/>
        <Skeleton className="w-[18ch] mb-[10px]" />
        <div className="flex gap-2 pb-[8px]">
          {[...Array(3)].map(_  => <Skeleton key={_} className="w-[7ch]"/>)}
        </div>
      </div>
    </>
  )
}