import { Card, Cards } from '@/src/components/templates'
import simba        from '@/src/assets/jpg/view/simba.jpeg'
import elephants       from '@/src/assets/jpg/view/elephants.jpeg'

export const SafariCards=()=>{
  return(
    <section>
      <Cards title="Safaris Activities">
        <Card src={simba} width={400} height={600} alt="Pick of Kilimanjaro" title="Kilimanjaro climbing" text="We offer Kilimanjaro climbing by three routes. Lemosho, Machame and Marangu route. Each of them are different and your choice is depend on your possibilities and expectation." />
        <Card src={elephants} width={400} height={600} alt="Pick of Mount Meru" title="Mount Meru climbing" text="We offer Mount Meru climbing as aclimatisation for Kilimanjaro climb or like other kind of activities. "/>
      </Cards>
    </section>
  )
}
