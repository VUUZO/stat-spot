'use client'

import { ReactNode, SetStateAction, createContext, useContext, useState } from "react"


export type Term = 'short_term' | 'medium_term' | 'long_term'

export type TermContextType = {
  term: Term
  setTerm: React.Dispatch<SetStateAction<Term>>
}

export const TermContext = createContext<TermContextType | null>(null)

export const TermProvider = ({ children }: { children: ReactNode }) => {
  const [term, setTerm] = useState<Term>('short_term')

  return (
    <TermContext.Provider value={{ term, setTerm }}>
      { children }
    </TermContext.Provider>
  )
}

export const useTermContext = () => {
  const context = useContext(TermContext)

  if (!context) {
    throw new Error('useTermContext must be used within a TermProvider.')
  }
  return context
}