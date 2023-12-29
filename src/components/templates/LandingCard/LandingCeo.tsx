import { Picture }   from '@/src/components/base/Pictures/Picture'
import { Paragraph } from '@/src/components/base/Text/Paragraph'

export const LandingCeo=()=>{
  return (
    <section className=" landing_ceo grid grid-cols-2">
      <div className="w-full">
        <Picture src="/kevin.jpg" alt="CEO of Talii Kitalii"/>
      </div>
      <div className="">
        <Paragraph text="Hi, I am Calvin - CEO of Talii Kitalii."/>
        <Paragraph
          text="Many thanks for contacting Talii Kitalii African safaris, your local adventure travel expert.  "
        />
      </div>
    </section>
  )
}
