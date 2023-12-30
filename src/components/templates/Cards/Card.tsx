import { Picture } from '@/src/components/base/Pictures/Picture'
import { OtherTitle } from '@/src/components/base'
import { Paragraph } from '@/src/components/base/Text/Paragraph'
import kilipick from'@/src/assets/jpg/view/kilimanjaro.jpeg'

export const Card=()=>{
  return(
    <div>
      <OtherTitle  text="Kilimanjaro climbing" />
      <Picture src={kilipick} width={300} height={500} alt="Pick of Kilimanjaro"/>
      <Paragraph text="We offer Kilimanjaro climbing by three routes. Lemosho, Machame and Marangu route. Each of them are different and your choice is depend on your possibilities and expectation."/>
    </div>
  )
}
