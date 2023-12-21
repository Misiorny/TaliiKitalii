import { ReactNode } from 'react'

interface HeaderTextProps {
  children: ReactNode
}

export const HeaderText = ({ children }: HeaderTextProps) => {
  return (
    <section className="hidden w-fit items-center justify-evenly text-center sm:flex sm:flex-col">
      {children}
    </section>
  )
}
