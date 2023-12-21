import { ReactNode } from 'react'

interface FooterProps{
  styles?:string,
  children?:ReactNode
}

export const Footer=({styles,children}:FooterProps)=>{
  return(
    <footer className={`max-w-screen-2xl mx-auto w-full m-1 rounded-3xl bg-main-light ${styles}`}>
      {children}
    </footer>
  )
}
