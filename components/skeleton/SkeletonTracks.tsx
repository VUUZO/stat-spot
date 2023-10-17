import { Grid } from "../Grid"
import { Skeleton } from "./Skeleton"

export const SkeletonTracks = () => {
  return (
    <Grid>
      {[...Array(18)].map((_, i) => (
        <li key={i}>
          <div>
            <div className="flex flex-col gap-2 sm:gap-4">
              <Skeleton className="w-full h-auto aspect-square"/>
              <div>
                  <Skeleton size={"md"} className="mb-[4px]"/>
                  <Skeleton className="w-[8ch]"/>
              </div>
            </div>
          </div>
        </li>
      ))}
    </Grid>
  )
}
