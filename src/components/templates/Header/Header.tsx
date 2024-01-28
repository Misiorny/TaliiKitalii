import { Logo }       from '@/src/components/base/Logo/Logo'
import { Navigation } from '@/src/components/templates/Navigation/Navigation'

export const Header = () => {
  return (
    <header className="relative top-0 bg-main-light w-full h-fit">
      <Logo/>
      <Navigation/>
    </header>
  )
}
