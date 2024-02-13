import { Paragraph } from '@/src/components/base/Text/Paragraph'
import { Picture }   from '@/src/components/base/Pictures/Picture'

export const LandingTeam = () => {
  return (
    <section className=" landing_team my-2">
      <div className="grid grid-cols-2">
      <div className="flex flex-col">
        <Paragraph
          text="Your safety and comfort are the most important to our team."
        />
        <div className="hidden sm:grid">
          <Paragraph
            text="Our team is dedicated to providing a uniquely memorable experience that is flexible and tailored to your specific preferences."
          />
        </div>
      </div>
      <Picture
        width={200} height={340} src="/team.jpeg" alt="Team of Talii Kitalii"
        imgTxt="Our team"
      />
      </div>
      <div className="sm:hidden flex ">
        <Paragraph
          text="Our team is dedicated to providing a uniquely memorable experience that is flexible and tailored to your specific preferences."
        />
      </div>
    </section>
  )
}
