import { ReactNode } from 'react'

interface HeaderProps {
  children: ReactNode
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <header className="mx-auto flex w-full max-w-screen-2xl justify-center bg-main-light sm:flex-row sm:justify-evenly rounded-3xl m-1">
      {children}
    </header>
  )
}
