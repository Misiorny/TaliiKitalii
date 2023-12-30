import { ReactNode } from 'react'
import { SubTitle }  from '@/src/components/base'

interface CardsProps{
  children:ReactNode
}
export const Cards=({children}:CardsProps)=>{
  return(
    <div className="border-2 border-complementary">
      <SubTitle text="Mountain Activities" styles="text-3xl"/>
      {children}
    </div>
  )
}
