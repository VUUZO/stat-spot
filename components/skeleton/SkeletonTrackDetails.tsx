import { twMerge } from "tailwind-merge"

export const SkeletonTrackDetails = () => {
  return (
    <>
    {/* IMAGE */}
      <div>
        <SkeletonBody className="mx-auto w-[270px] h-auto aspect-square border-2 border-gray-neutral rounded-[16px]"/>
      </div>
    {/* TRACK INFO */}
      <div className="py-2 px-mobile">
        <SkeletonBody className="mb-[5px] h-[36px] w-[20ch]"/>
        <SkeletonBody className="mb-[10px] h-[22px] w-[8ch]"/>
        <SkeletonBody className="h-[22px] w-[4ch]"/>
      </div>
    </>
  )
}

const SkeletonBody = ({className}:{className:string}) => <div className={twMerge('h-[22px] rounded-lg min-w-[10ch] bg-zinc-800', className)}/>