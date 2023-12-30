import { Paragraph } from '@/src/components/base/Text/Paragraph'
import { Picture }   from '@/src/components/base/Pictures/Picture'

export const LandingTeam=()=>{
  return (
    <section className=" landing_team grid grid-cols-2">
      <div>
        <Paragraph
          text="Your safety and comfort are the most important to our team."
        />
      </div>
      <Picture width={200} height={340} src="/team.jpeg" alt="Team of Talii Kitalii"/>
    </section>
  )
}
