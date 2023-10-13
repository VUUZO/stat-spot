'use client'

import { TopType, useTopValues } from "@/app/context/top-values-context"


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

  return (
    <nav className="flex p-4">
      {btns.map(btn => (
        <button
          key={btn.id}
          onClick={() => setValue(btn.value)}
          className={`flex-1 block ${btn.value === value ? 'text-green' : ''}`}
        >
          {btn.label}
        </button>
      ))}
    </nav>
  )
}
