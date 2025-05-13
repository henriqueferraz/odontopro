import { Footer } from "./_components/footer"
import { Header } from "./_components/header"
import { Hero } from "./_components/hero"
import { Professional } from "./_components/professional"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <div>
        <Hero />
        <Professional />
        <Footer />
      </div>
    </div>
  )
}