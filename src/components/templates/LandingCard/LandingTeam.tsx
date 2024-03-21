import { Paragraph } from '@/src/components/base/Text/Paragraph'
import { Picture }   from '@/src/components/base/Pictures/Picture'

export const LandingTeam = () => {
  return (
    <section className="m-2 mt-6 rounded-xl shadow-xl landing_team shadow-complementary-dark bg-main-light">
      <div className="grid grid-cols-2">
      <div className="flex flex-col ">
        <Paragraph
          text="Your safety and comfort are the most important to our team."
        />
        <div className="hidden md:grid">
          <Paragraph
            text="Our team is dedicated to providing a uniquely memorable experience that is flexible and tailored to your specific preferences."
          />
        </div>
      </div>
      <Picture
        width={200} height={340} src="/team.jpeg" alt="Team of Talii Kitalii"
        imgTxt="Talii Kitalii Team"
      />
      </div>
      <div className="flex md:hidden">
        <Paragraph
          text="Our team is dedicated to providing a uniquely memorable experience that is flexible and tailored to your specific preferences."
        />
      </div>
    </section>
  )
}
