import { Picture }   from '@/src/components/base/Pictures/Picture'
import { Paragraph } from '@/src/components/base/Text/Paragraph'

export const LandingCeo=()=>{
  return (
    <section className="grid grid-cols-2 landing_ceo">
      <div className="w-full">
        <Picture width={200} height={340} src="/kevin.jpg" alt="CEO of Talii Kitalii"/>
      </div>
      <div className="">
        <Paragraph text="Hi, I am Calvin - CEO of Talii Kitalii."/>
        <Paragraph
          text="Many thanks for contacting Talii Kitalii African safaris, your local adventure travel expert.  "
        />
        <Paragraph text="It would be an absolute pleasure to organize your tour in Tanzania. "/>
      </div>
    </section>
  )
}
