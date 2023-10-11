import { Grid } from "../Grid"

export const SkeletonTracks = () => {
  return (
    <Grid>
      {[...Array(20)].map((_, i) => (
        <li key={i}>
        <div>
          <div className="flex flex-col gap-2 sm:gap-4">
            <div className="aspect-square bg-zinc-800 animate-pulse w-full relative overflow-hidden rounded-md border-2 border-dark-light"/>
            <div>
              <div className="flex gap-2">
                <h3 className="truncate bg-zinc-800 rounded-lg h-[24px] mb-[4px] w-[12ch] sm:h-[36px]"/>
              </div>
                <p className="truncate bg-zinc-800 rounded-lg h-[16px] w-[7ch] sm:h-[24px]"/>
            </div>
          </div>
        </div>
      </li>
      ))}
    </Grid>
  )
}
