import { ReactNode } from 'react'

interface BurgerButtonProps{
  children:ReactNode
}

export const BurgerButton=({children}:BurgerButtonProps)=>{
  return(
    <button>
      {children}
    </button>
  )
}
