interface ParagraphProps{
  text:string
}

export const Paragraph=({text}:ParagraphProps)=>{
  return(
    <p className="p-2 text-sm font-semibold tracking-wide text-main-dark">{text}</p>
  )
}
