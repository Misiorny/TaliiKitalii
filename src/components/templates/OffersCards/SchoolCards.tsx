import { Card, Cards } from '@/src/components/templates'
import couple        from '@/src/assets/jpg/view/couple.jpeg'
import zebra       from '@/src/assets/jpg/view/zebra.jpeg'

export const SchoolCards=()=>{
  return(
    <section>
      <Cards title="Schools Activities">
        <Card src={couple} width={400} height={600} alt="Pick of Kilimanjaro" title="Cultural journey for schools" text="As a kind of education we can arrange cultural activities for schools. In our offer we have bus trip around Arusha region." />
        <Card src={zebra} width={400} height={600} alt="Pick of Mount Meru" title="School activities" text="We can create trip according to school programm of education."/>
      </Cards>
    </section>
  )
}
