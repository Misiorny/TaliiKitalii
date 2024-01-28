import { ReactNode } from 'react'

interface NavGroupProps{
  text:string
  children:ReactNode
}

export const NavGroup=({text,children}:NavGroupProps)=>{
  return(
    <ul className="w-full p-2 uppercase ">{text}
      {children}
    </ul>
  )
}
