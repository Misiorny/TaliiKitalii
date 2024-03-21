interface ParagraphProps{
  text:string
  textColor?:string
}

export const Paragraph=({text, textColor}:ParagraphProps)=>{
  return(
    <p className={`p-2 text-base text-${textColor} 2xs:py-3 2xs:text-xl`}>{text}</p>
  )
}
