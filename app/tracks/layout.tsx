'use client'

import { motion } from "framer-motion"
import { TimeRange } from "@/lib/spotify"
import { ReactNode, createContext, useState } from "react"

const buttons = [
  { name: '4 weeks', id: 0, term: 'short_term' },
  { name: '6 months', id: 1, term: 'medium_term' },
  { name: 'All time', id: 2, term: 'long_term' },
]

export const TermContext = createContext('short_term')

export default function TracksLayout({ children }: { children: ReactNode}) {
  const [ term, setTerm ] = useState<TimeRange>('short_term')  
  return (
    <section>
        <nav className="sticky top-0 z-20 flex pb-[25px]">
          <ul className="flex justify-between w-full bg-darkest p-[8px] rounded-[20px] border border-[#1D1D1D]">
            {buttons.map(button =>
              <li key={button.id} className="flex-1">
                <button
                  className={`relative w-full px-4 py-2 rounded-[12px]`}
                  onClick={() => setTerm(button.term as TimeRange)}
                >
                  <span className={`${button.term === term ? 'text-green' : ''}`}>{button.name}</span>
                  {
                    button.term === term && (
                      <motion.div layoutId="active" className={`absolute rounded-[12px] inset-0 bg-green-light`}/>
                    )
                  }
                </button>
              </li>)}
          </ul>
        </nav>
        <TermContext.Provider value={ term }>
          <section>
            { children }
          </section>
        </TermContext.Provider>
      </section>
  )
}