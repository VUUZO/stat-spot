import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

export const Container = ({ children, className }:{ children: ReactNode, className?: string }) => {
  return (
    <div className={twMerge(`rounded-[10px] p-[10px] bg-dark bg-opacity-70 border border-[rgba(97,97,97)] border-opacity-20`, className)}>
      { children }
    </div>
  )
}