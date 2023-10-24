'use client'

import { Term, useTermContext } from "@/app/context/term-context"
import { motion } from "framer-motion"
import { Container } from "./Container"


const buttons = [
  { name: '4 weeks', id: 0, term: 'short_term' },
  { name: '6 months', id: 1, term: 'medium_term' },
  { name: 'All time', id: 2, term: 'long_term' },
]

export const TermNavigation = () => {
  const { term, setTerm } = useTermContext()

  return (
    <nav className="p-mobile">
    <Container className="flex rounded-[calc(12px+4px)] p-mobile-nav">
      {buttons.map(button =>
        <li key={button.id} className="flex-1">
          <button
            className={`relative w-full px-4 py-2 rounded-[12px]`}
            onClick={() => setTerm(button.term as Term)}
          >
            <span className={`relative z-10 ${button.term === term ? 'text-primary' : ''}`}>{button.name}</span>
            {
              button.term === term && (
                <motion.div
                  layoutId="active"
                  style={{ borderRadius: '12px', originY: '0px' }}
                  className={`absolute inset-0 bg-primary/20`}
                />
              )
            }
          </button>
        </li>)}
    </Container>
  </nav>
  )
}