import { ReactNode } from 'react'

interface MainProps{

  children:ReactNode
}

export const Main=({children}:MainProps)=>{
  return(
    <main className="mx-auto w-full max-w-screen-2xl flex-grow z-20 my-2 " >
      {children}
    </main>
  )
}
