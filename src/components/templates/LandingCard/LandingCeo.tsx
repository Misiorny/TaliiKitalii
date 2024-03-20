import { Picture }   from '@/src/components/base/Pictures/Picture'
import { Paragraph } from '@/src/components/base/Text/Paragraph'

export const LandingCeo=()=>{
  return (
    <section className="m-2 rounded-xl shadow-xl landing_ceo shadow-complementary-dark bg-main-light">
      <div className="grid w-full grid-cols-2">
        <Picture width={200} height={340} src="/kevin.jpg" alt="CEO of Talii Kitalii" imgTxt="Talii Kitalii CEO"/>
        <div className="flex flex-col justify-center">

          <Paragraph
            text="Hi! My name is Calvin. Many thanks for contacting Talii Kitalii African safaris, your local adventure travel expert."
          />
          <div className="hidden md:grid">
            <Paragraph
              text="It would be an absolute pleasure to organize your tour in Tanzania. "
            />
            <Paragraph
              text="We are happy to ensure you that your request is available and we can accommodate your request in a highly professional manner."
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:hidden">
        <Paragraph
          text="It would be an absolute pleasure to organize your tour in Tanzania. "
        />
        <Paragraph
          text="We are happy to ensure you that your request is available and we can accommodate your request in a highly professional manner."
        />
      </div>
    </section>
  )
}
