import { Paragraph } from '@/src/components/base/Text/Paragraph'
interface LandingParagraphProps{
  text:string
}
export const LandingParagraph=({text}:LandingParagraphProps)=>{
  return (
    <div className="landing_paragraph">
      <Paragraph
        text={text}
      />
    </div>
  )
}
