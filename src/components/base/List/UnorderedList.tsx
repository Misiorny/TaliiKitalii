import { ReactNode } from 'react'

interface UnorderedListProps{
  children:ReactNode
}
export const UnorderedList=({children}:UnorderedListProps)=>{
  return(
    <ul className="flex flex-row justify-evenly">
      {children}
    </ul>
  )
}
