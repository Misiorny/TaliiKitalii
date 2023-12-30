import { ReactNode } from 'react'
import { SubTitle }  from '@/src/components/base'
import { camila }    from '@/src/app/fonts'

interface CardsProps{
  children:ReactNode
}
export const Cards=({children}:CardsProps)=>{
  return(
    <div className="">
      <SubTitle font={camila.className} text="Mountain Activities" styles="text-4xl uppercase "/>
      {children}
    </div>
  )
}
