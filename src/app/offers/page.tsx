import {
  Footer, Header, Main
} from '@/src/components/templates'
import { OffersCards } from '@/src/components/templates/OffersCards/OffersCards'

export default function OffersPage () {
  return (
    <div className=" landing flex min-h-screen flex-col bg-[url('/tanzania.jpg')] bg-cover relative ">
      <div className="absolute z-10 h-full w-full opacity-60 bg-main-light"></div>
      <Header />
      <Main>
        <OffersCards />
      </Main>
      <Footer/>

    </div>

  )
}
