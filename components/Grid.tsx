import { ReactNode } from "react"
import { Container } from "./Container"

export const Grid = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="grid gap-3 grid-cols-3 lg:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      { children }
    </ul>
  )
}