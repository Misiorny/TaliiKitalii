import { Card, Cards } from '@/src/components/templates'
import couple        from '@/src/assets/jpg/view/couple.jpeg'
import zebra       from '@/src/assets/jpg/view/zebra.jpeg'

export const SchoolCards=()=>{
  return(
    <section>
      <Cards title="Schools Activities">
        <Card src={couple} width={400} height={600} alt="Pick of Kilimanjaro" title="Kilimanjaro climbing" text="We offer Kilimanjaro climbing by three routes. Lemosho, Machame and Marangu route. Each of them are different and your choice is depend on your possibilities and expectation." />
        <Card src={zebra} width={400} height={600} alt="Pick of Mount Meru" title="Mount Meru climbing" text="We offer Mount Meru climbing as aclimatisation for Kilimanjaro climb or like other kind of activities. "/>
      </Cards>
    </section>
  )
}
