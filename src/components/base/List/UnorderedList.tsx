import { ReactNode } from 'react'

interface UnorderedListProps{
  children:ReactNode
  style:string
}
export const UnorderedList=({children, style}:UnorderedListProps)=>{
  return(
    <ul className={`sm:flex sm:flex-row justify-evenly w-full px-2 py-1 ${style}`} >
      {children}
    </ul>
  )
}
