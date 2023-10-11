'use client'

import { ReactNode, useState } from "react"
import ColorContext from "./ColorProvider"
import { twMerge } from "tailwind-merge"

export const GridLayout = ({ children }: { children: ReactNode }) => {
  const [contextColor, setContextColor] = useState('#91FF5E')

  return (
    <ColorContext.Provider value={{ contextColor, setContextColor }}>
      <section
      style={{ background: `linear-gradient(${contextColor}40 0%, transparent 32%), #131313` }}
      className={twMerge(`text-white h-[100dvh] bg-dark gap-[10px] p-[10px] grid grid-areas-layout-mobile grid-cols-layout-mobile grid-rows-layout-mobile lg:grid-areas-layout lg:grid-cols-layout lg:grid-rows-layout`
      )}
      >
        { children }
      </section>
    </ColorContext.Provider>
  )
}
