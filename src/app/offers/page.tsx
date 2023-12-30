import {
  Footer, Header, Main
} from '@/src/components/templates'
import { OffersCards } from '@/src/components/templates/OffersCards/OffersCards'

export default function OffersPage () {
  return (
    <div className=" landing flex min-h-screen flex-col bg-[url('/tanzania.jpg')] bg-cover relative ">
      <div className="absolute w-full h-full  bg-main-light opacity-60 z-10"></div>
      <Header />
      <Main>
        <OffersCards />
        <p> Here I will put offers of possible activities like climbing, safaris, school trips and others </p>
      </Main>
      <Footer/>

    </div>

  )
}
