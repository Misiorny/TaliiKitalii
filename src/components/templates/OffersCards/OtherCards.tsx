import { Card, Cards } from '@/src/components/templates'
import giraffs        from '@/src/assets/jpg/view/giraffs.jpeg'
import giraff       from '@/src/assets/jpg/view/giraff.jpeg'

export const OtherCards=()=>{
  return(
    <section>
      <Cards title="Other Activities">
        <Card src={giraffs} width={400} height={600} alt="Pick of Kilimanjaro" title="Chemka Hot Springs" text="Before your departing from Tanzania we can show you beautifull place for rest and chili in Chemka Hot Springs." />
        <Card src={giraff} width={400} height={600} alt="Pick of Mount Meru" title="Arusha walking and coffe farm" text="You can see how looks normal day in Arusha and how the coffee is made."/>
      </Cards>
    </section>
  )
}
