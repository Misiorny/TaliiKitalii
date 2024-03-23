import { ReactNode } from 'react'

interface MainProps {
  children: ReactNode
}

export const Main = ({ children }: MainProps) => {
  return (
    <main className="z-20 mx-auto my-2 w-full max-w-screen-2xl ">
      {children}
    </main>
  )
}
