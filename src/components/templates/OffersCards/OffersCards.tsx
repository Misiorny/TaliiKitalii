import { ReactNode } from 'react'

interface OffersCardsProps{
  children:ReactNode
}
export const OffersCards=({children}:OffersCardsProps)=>{
  return(
    <section>
      {children}
    </section>
  )
}
