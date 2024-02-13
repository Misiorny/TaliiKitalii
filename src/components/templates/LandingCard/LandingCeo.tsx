import { Picture }   from '@/src/components/base/Pictures/Picture'
import { Paragraph } from '@/src/components/base/Text/Paragraph'

export const LandingCeo=()=>{
  return (
    <section className="landing_ceo my-2">
      <div className="grid w-full grid-cols-2">
        <Picture width={200} height={340} src="/kevin.jpg" alt="CEO of Talii Kitalii" imgTxt="CEO of Talii Kitalii"/>
        <div>
          <Paragraph text="Hi, I am Calvin."/>
          <Paragraph
            text="Many thanks for contacting Talii Kitalii African safaris, your local adventure travel expert."
          />
          <div className="sm:grid hidden">
            <Paragraph
              text="It would be an absolute pleasure to organize your tour in Tanzania. "
            />
            <Paragraph
              text="We are happy to ensure you that your request is available and we can accommodate your request in a highly professional manner."
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:hidden">
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
