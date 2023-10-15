'use client'

import { TopType, useTopValues } from "@/app/context/top-values-context"
import { useMotionValueEvent, motion, useScroll } from "framer-motion"
import { useState } from "react"
import { Container } from "./Container"

type Btn = {
  id: number
  label: string
  value: TopType
}

const btns: Btn[] = [
  { id: 0, label: 'Tracks', value: 'tracks' },
  { id: 1, label: 'Artists', value: 'artists' },
]

export const TopNavigation = () => {
  const { value, setValue } = useTopValues()
  const { scrollY } = useScroll()
  
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, 'change', last => {
    const prev = scrollY.getPrevious()

    last > prev && last > 100 ? setHidden(true) : setHidden(false) 
  })

  return (
    <Container
      variant={"transparent"}
      className={`fixed left-0 bottom-0 z-20 w-full bg-gradient-to-t from-gray-darker via-gray-darker to-transparent duration-200 ease-in-out transition-transform ${hidden ? 'translate-y-full' : 'translate-y-0'}`}
    >
      <Container
        className="flex">
        {btns.map(btn => (
          <button
            key={btn.id}
            onClick={() => setValue(btn.value)}
            className={`transition-colors duration-200 flex-1 block ${btn.value === value ? 'text-primary' : 'text-gray-lighter'}`}
          >
            {btn.label}
          </button>
        ))}
      </Container>
    </Container>
  )
}
