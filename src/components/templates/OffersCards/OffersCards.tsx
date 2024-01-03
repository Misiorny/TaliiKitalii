import {
  ClimbingCards
} from '@/src/components/templates/OffersCards/ClimbingCards'
import { SafariCards } from '@/src/components/templates/OffersCards/SafariCards'
import { SchoolCards } from '@/src/components/templates/OffersCards/SchoolCards'
import { OtherCards } from '@/src/components/templates/OffersCards/OtherCards'

export const OffersCards=()=>{
  return(
    <section className="max-w-screen-2xl landing">
      <ClimbingCards/>
      <SafariCards/>
      <SchoolCards/>
      <OtherCards/>
    </section>
  )
}
