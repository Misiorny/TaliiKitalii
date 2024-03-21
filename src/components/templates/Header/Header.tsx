import { Logo } from '@/src/components/base'
import { Navbar } from '@/src/components/templates'
import Link from 'next/link'

export const Header = () => {

  return (
    <header
      className="top-0 z-50 mx-auto flex w-full max-w-screen-2xl flex-col justify-center sm:flex-col sm:justify-evenly  "
    >
      <section
        className="flex flex-col m-2 rounded-xl shadow-xl shadow-complementary-dark bg-main-light "
      >
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
        <Navbar/>
      </section>
    </header>
  )
}
