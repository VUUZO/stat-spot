import { TopValuesProvider } from "../context/top-values-context"
import { TopNavigation } from "@/components/TopNavigation"

const TopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <TopValuesProvider>
        <TopNavigation />
        <section>
          { children }
        </section>
      </TopValuesProvider>
    </section>
  )
}

export default TopLayout