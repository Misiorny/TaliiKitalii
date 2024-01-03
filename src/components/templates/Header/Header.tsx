import { Logo, MainText, MainTitle, SubTitle } from '@/src/components/base'
import { HeaderText, Navbar }                  from '@/src/components/templates'
import Link                                    from 'next/link'

export const Header = () => {

  return (
    <header
      className={`mx-auto flex flex-col w-full  max-w-screen-2xl justify-center sm:flex-col sm:justify-evenly rounded-3xl m-2 relative  z-20`}
    >
      <Navbar/>
      <section className=" flex flex-row justify-evenly">
        <Link href="/">
          <Logo/>
        </Link>
        <HeaderText>
          <MainTitle
            text="Talii Kitalii"
          />
          <SubTitle
            text="African Safaris"
          />
          <MainText text="To travel is to life"/>
        </HeaderText>
      </section>
    </header>
  )
}
