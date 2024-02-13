import {
  Footer, Header, Main
} from '@/src/components/templates'
import { OffersCards } from '@/src/components/templates/OffersCards/OffersCards'

export default function OffersPage () {
  return (
    <div className=" landing flex min-h-screen flex-col relative ">

      <Header />
      <Main>
        <OffersCards />
      </Main>
      <Footer/>

    </div>

  )
}
