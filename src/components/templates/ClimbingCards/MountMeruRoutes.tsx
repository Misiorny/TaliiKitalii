import { Card, Cards } from '@/src/components/templates'
import mountmeru from'@/src/assets/jpg/view/mountmeru.jpg'
export const MountMeruRoutes = () => {
  return (
    <section>
      <Cards title="Mount Meru climbing">
        <Card src={mountmeru} width={400} height={600} alt="Pick of Kilimanjaro" title="Mount Meru climbing" text="We offer Kilimanjaro climbing by three routes. Lemosho, Machame and Marangu route. Each of them are different and your choice is depend on your possibilities and expectation." />
        <Card src={mountmeru} width={400} height={600} alt="Pick of Mount Meru" title="Mount Meru hiking" text="We offer Mount Meru climbing as aclimatisation for Kilimanjaro climb or like other kind of activities. "/>
      </Cards>
    </section>
  )
}
