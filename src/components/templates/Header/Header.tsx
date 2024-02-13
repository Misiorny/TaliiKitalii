import { Logo, MainText, MainTitle, SubTitle } from '@/src/components/base'
import { HeaderText, Navbar }                  from '@/src/components/templates'
import Link                                    from 'next/link'

export const Header = () => {

  return (
    <header
      className="top-0 z-50 mx-auto flex w-full max-w-screen-2xl flex-col justify-center sm:flex-col sm:justify-evenly"
    >
      <section className="flex flex-row justify-evenly">
        <Link href="/">
          <Logo/>
        </Link>
        {/*<HeaderText>*/}
        {/*  <MainTitle*/}
        {/*    text="Talii Kitalii"*/}
        {/*  />*/}
        {/*  <SubTitle*/}
        {/*    text="African Safaris"*/}
        {/*  />*/}
        {/*  <MainText text="To travel is to life"/>*/}
        {/*</HeaderText>*/}
      </section>
      <Navbar/>
    </header>
  )
}
