'use client'

import { ReactNode, useState } from "react"
import { twMerge } from "tailwind-merge"

export const GridLayout = ({ children }: { children: ReactNode }) => {

  return (
      <section className={twMerge(`text-white h-[100dvh] bg-dark gap-[10px] p-[10px] grid grid-areas-layout-mobile grid-cols-layout-mobile grid-rows-layout-mobile lg:grid-areas-layout lg:grid-cols-layout lg:grid-rows-layout`
      )}
      >
        { children }
      </section>
  )
}
