import { Card, Cards } from '@/src/components/templates'
import kilipick from'@/src/assets/jpg/view/kilimanjaro.jpeg'
export const KilimanjaroRoutes = () => {
  return (
    <section>
      <Cards title="Kilimanjaro hicking">
        <Card src={kilipick} width={400} height={600} alt="Pick of Kilimanjaro" title="Lemosho Route" text="We offer Kilimanjaro climbing by three routes. Lemosho, Machame and Marangu route. Each of them are different and your choice is depend on your possibilities and expectation." />
        <Card src={kilipick} width={400} height={600} alt="Pick of Mount Meru" title="Machame Route" text="We offer Mount Meru climbing as aclimatisation for Kilimanjaro climb or like other kind of activities. "/>
        <Card src={kilipick} width={400} height={600} alt="Pick of Mount Meru" title="Marangu Route" text="We offer Mount Meru climbing as aclimatisation for Kilimanjaro climb or like other kind of activities. "/>
      </Cards>
    </section>
  )
}
