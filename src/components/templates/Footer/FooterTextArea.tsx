import { ReactNode } from 'react'

interface FooterTextAreaProps{
  children:ReactNode
}
export const FooterTextArea=({children}:FooterTextAreaProps)=>{
  return(
    <div className="footerText hidden sm:flex justify-center">
      {children}
    </div>
  )
}
