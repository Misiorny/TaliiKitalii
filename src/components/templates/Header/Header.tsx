import { Logo } from '@/src/components/Logo/Logo'
import { LogoBurger } from '@/src/components/Logo/LogoBurger'

export const Header = () => {
  return (
    <header className="sticky top-0 bg-main-light w-full h-fit">
      <LogoBurger/>
      <Logo/>
    </header>
  )
}
