import { ReactNode } from 'react'

interface LandingCardProps{
  children:ReactNode
}

export const LandingCard=({children}:LandingCardProps)=>{
  return(
    <div>
      {children}
    </div>
  )
}
