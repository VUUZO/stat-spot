import { ReactNode } from "react"

export const Grid = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="grid gap-[10px] grid-cols-4 lg:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
      { children }
    </ul>
  )
}