interface ParagraphProps{
  text:string
  textColor?:string
}

export const Paragraph=({text, textColor}:ParagraphProps)=>{
  return(
    <p className={`p-2 text-base font-bold tracking-wide text-${textColor} sm:py-3 sm:text-xl`}>{text}</p>
  )
}
