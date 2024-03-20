import { MouseEventHandler, ReactNode } from 'react'

interface UnorderedListProps{
  children:ReactNode
  style?:string
  onClick?:MouseEventHandler
}
export const UnorderedList=({children, style, onClick}:UnorderedListProps)=>{
  return(
    <ul className={`sl:flex sl:flex-row justify-evenly w-full px-2 py-1 bg-main-light rounded-xl  ${style}`} onClick={onClick}>
      {children}
    </ul>
  )
}
