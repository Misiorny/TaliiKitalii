import { Header } from '@/src/components/templates/Header/Header'
import { Footer } from '@/src/components/templates/Footer/Footer'
import { Dashboard } from '@/src/components/templates/Dashboard/Dashboard'

export default function Home () {
  return (
    <div
      className="flex min-h-screen flex-col max-w-screen-2xl mx-auto"
    >
      <Header/>
      <Dashboard/>
      <Footer/>

    </div>

  )
}
