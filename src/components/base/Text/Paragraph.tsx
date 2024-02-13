interface ParagraphProps{
  text:string
}

export const Paragraph=({text}:ParagraphProps)=>{
  return(
    <p className="p-2 text-sm font-bold tracking-wide text-main-dark sm:text-xl sm:py-3">{text}</p>
  )
}
