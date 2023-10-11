import { createContext } from "react"

export type ColorContextType = {
  contextColor: string
  setContextColor: (v: string) => void
}

const ColorContext = createContext<ColorContextType>({
  contextColor: '',
  setContextColor: () => {}
})

export default ColorContext
