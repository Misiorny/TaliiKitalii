import { LandingCeo }  from '@/src/components/templates/LandingCard/LandingCeo'
import { LandingTeam } from '@/src/components/templates/LandingCard/LandingTeam'
import {
  LandingParagraph
}                      from '@/src/components/templates/LandingCard/LandingParagraph'
import {
  LandingBtnArea
} from '@/src/components/templates/LandingCard/LandingBtnArea'

export const LandingCard = () => {
  return (
    <section className="max-w-screen-2xl landing">
      <LandingCeo/>
      <LandingParagraph
        text="We are happy to ensure you that your request is available and we can accommodate your request in a highly professional manner."
      />
      <LandingTeam/>
      <LandingParagraph
        text="Our team is dedicated to providing a uniquely memorable experience that is flexible and tailored to your specific preferences."
      />
      <LandingBtnArea/>
    </section>
  )
}
