'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react"

export type TopType = 'artists' | 'tracks'

export type TopValues = {
  value: TopType
  setValue: Dispatch<SetStateAction<TopType>>
}

export const TopValuesContext = createContext<TopValues | null>(null)

export const TopValuesProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<TopType>('tracks')
  return (
    <TopValuesContext.Provider value={{ value, setValue }}>
      { children }
    </TopValuesContext.Provider>
  )
}

export const useTopValues = () => {
  const context = useContext(TopValuesContext)

  if (!context) {
    throw new Error('useTopValues must be used within a TopValuesProvider.')
  }
  return context
}
