import { ReactNode } from 'react'

interface UnorderedListProps{
  children:ReactNode
  style:string
}
export const UnorderedList=({children, style}:UnorderedListProps)=>{
  return(
    <ul className={`sm:flex sm:flex-row justify-evenly w-full ${style}`} >
      {children}
    </ul>
  )
}
