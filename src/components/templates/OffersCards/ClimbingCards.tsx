import { Card, Cards } from '@/src/components/templates'
import kilipick from'@/src/assets/jpg/view/kilimanjaro.jpeg'
import mountmeru from'@/src/assets/jpg/view/mountmeru.jpg'
export const ClimbingCards = () => {
  return (
    <section>
      <Cards title="Mountain Activities">
        <Card src={kilipick} width={400} height={600} alt="Pick of Kilimanjaro" title="Kilimanjaro climbing" text="We offer Kilimanjaro climbing by three routes. Lemosho, Machame and Marangu route. Each of them are different and your choice is depend on your possibilities and expectation." />
        <Card src={mountmeru} width={400} height={600} alt="Pick of Mount Meru" title="Mount Meru climbing" text="We offer Mount Meru climbing as aclimatisation for Kilimanjaro climb or like other kind of activities. "/>
      </Cards>
    </section>
  )
}
