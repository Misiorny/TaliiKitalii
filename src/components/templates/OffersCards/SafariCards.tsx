import { Card, Cards } from '@/src/components/templates'
import simba        from '@/src/assets/jpg/view/simba.jpeg'
import elephants       from '@/src/assets/jpg/view/elephants.jpeg'

export const SafariCards=()=>{
  return(
    <section>
      <Cards title="Safaris Activities">
        <Card src={simba} width={400} height={600} alt="Pick of Kilimanjaro" title="Safari in National Park" text="We offer Safaris in National Park like Serengeti, Arusha NP, Ngorongoro Conservation Area. We offer from 1 to 5 days safari in east-north part of Tanzania. " />
        <Card src={elephants} width={400} height={600} alt="Pick of Mount Meru" title="Cultural activities" text="For all tourists who want to see some kind of african culture we can show Hadzabe Tribe village and Masai village.     "/>
      </Cards>
    </section>
  )
}
