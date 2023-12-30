import { Picture } from '@/src/components/base/Pictures/Picture'
import { OtherTitle } from '@/src/components/base'
import { Paragraph } from '@/src/components/base/Text/Paragraph'
import kilipick from'@/src/assets/jpg/view/kilimanjaro.jpeg'

export const Card=()=>{
  return(
    <div>
      <OtherTitle  text="Kilimanjaro climbing" />
      <Picture src={kilipick} width={200} height={340} alt="Pick of Kilimanjaro"/>
      <Paragraph text="We offer Kilimanjaro climbing by three routes. Lemosho, Machame and Marangu. Each of them are different and your choice is depend on your possibilities and expectation."/>
    </div>
  )
}
