import { ReactNode } from 'react'

interface CardsProps{
  children:ReactNode
}
export const Cards=({children}:CardsProps)=>{
  return(
    <div>
      {children}
    </div>
  )
}
