import { Logo } from '@/src/components/base'
import { Navbar } from '@/src/components/templates'
import Link from 'next/link'
import { HeroShadow } from '@/src/components/base/HeroShadow/HeroShadow'

export const Header = () => {

  return (
    <header
      className="top-0  mx-auto flex w-full max-w-screen-2xl flex-col justify-center sm:flex-col sm:justify-evenly "
    >
        <Navbar/>
      <section
        className="flex flex-col bg-[url('/zebras.jpg')] bg-cover bg-center relative"
      >
        <Link href="/" className="z-20">
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
        <HeroShadow bgColor="main-light" opacityValue="60"/>
      </section>
    </header>
  )
}
