import { Card, Cards } from '@/src/components/templates'
import giraffs        from '@/src/assets/jpg/view/giraffs.jpeg'
import giraff       from '@/src/assets/jpg/view/giraff.jpeg'

export const OtherCards=()=>{
  return(
    <section>
      <Cards title="Other Activities">
        <Card src={giraffs} width={300} height={500} alt="Pick of Kilimanjaro" title="Chemka Hot Springs" text="We offer Kilimanjaro climbing by three routes. Lemosho, Machame and Marangu route. Each of them are different and your choice is depend on your possibilities and expectation." />
        <Card src={giraff} width={300} height={500} alt="Pick of Mount Meru" title="Arusha walking" text="We offer Mount Meru climbing as aclimatisation for Kilimanjaro climb or like other kind of activities. "/>
      </Cards>
    </section>
  )
}
