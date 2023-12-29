interface ParagraphProps{
  text:string
}

export const Paragraph=({text}:ParagraphProps)=>{
  return(
    <p className="text-main-dark text-sm p-2 font-semibold tracking-wide ">{text}</p>
  )
}
