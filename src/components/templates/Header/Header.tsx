import { Logo, MainText, MainTitle, SubTitle } from '@/src/components/base'
import { HeaderText, Navbar }          from '@/src/components/templates'
import { bodoni, camila } from '@/src/app/fonts'
import Link                            from 'next/link'


export const Header = () => {

  return (
    <header
      className={`mx-auto flex flex-col w-full  max-w-screen-2xl justify-center sm:flex-row sm:justify-evenly rounded-3xl m-2 relative  z-20`}
    >
      <Navbar/>
      <Link href="/">
        <Logo/>
      </Link>
      <HeaderText>
        <MainTitle
          font={`${camila.className}`} styles="text-6xl text-bold" text="Talii Kitalii"
        />
        <SubTitle
          font={`${bodoni.className}`} styles="text-4xl uppercase" text="African Safaris"
        />
        <MainText text="To travel is to life"/>
      </HeaderText>

    </header>
  )
}
