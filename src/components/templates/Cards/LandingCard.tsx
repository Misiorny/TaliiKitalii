import { Picture } from '@/src/components/base/Pictures/Picture'
import { Paragraph } from '@/src/components/base/Text/Paragraph'
import { ButtonCta } from '@/src/components/base'

export const LandingCard = () => {
  return (
    <section className="landing">
      <section className="grid grid-cols-2">
        <div className="w-full">
          <Picture src="/kevin.jpg" alt="CEO of Talii Kitalii"/>
        </div>
        <div className="">
          <Paragraph text="Hi,"/>
          <Paragraph text="Greetings from Talii Kitalii African safaris."/>
          <Paragraph
            text="Many thanks for contacting Talii Kitalii African safaris, your local adventure travel expert.  "
          />
        </div>
      </section>
      <div>
        <Paragraph
          text="It would be an absolute pleasure to organize your tour in Tanzania for the Kilimanjaro climb as you requested. We are happy to ensure you that your request is available and we can accommodate your request in a highly professional manner."
        />
      </div>
      <section className="grid grid-cols-2">
        <div>
          <Paragraph
            text="Our team is dedicated to providing a uniquely memorable experience that is flexible and tailored to your specific preferences. Safety and comfort are of utmost importance to us."
          />
        </div>
        <Picture src="/team.jpeg" alt="Team of Talii Kitalii"/>
      </section>
      <div className="btnarea justify-center flex">
        <ButtonCta text="See our trips" to="/offers"/>
      </div>
    </section>
  )
}
