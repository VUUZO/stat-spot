import { Container } from "@/components/Container"
import { TopValuesProvider } from "../context/top-values-context"
import { TopNavigation } from "@/components/TopNavigation"

const TopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <TopValuesProvider>
        <Container>
        <TopNavigation />
          { children }
        </Container>
      </TopValuesProvider>
    </section>
  )
}

export default TopLayout