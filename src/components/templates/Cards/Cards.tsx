import { ReactNode } from 'react'
import { SubTitle }  from '@/src/components/base'

interface CardsProps{
  children:ReactNode,
  title:string
}
export const Cards=({children,title}:CardsProps)=>{
  return(
    <div className="">
      <SubTitle  text={title}/>
      {children}
    </div>
  )
}
