import { ReactNode } from 'react'

interface OrderedListProps{
  children:ReactNode
}

export const OrderedList=({children}:OrderedListProps)=>{
  return(
    <ol>
      {children}
    </ol>
  )
}
