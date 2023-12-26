import { Logo, MainText, MainTitle, SubTitle } from '@/src/components/base'
import { HeaderText }                          from '@/src/components/templates'
import { ds, raleway }                         from '@/src/app/fonts'
import Link                                    from 'next/link'

export const Header = () => {

  return (
    <header
      className={`mx-auto flex w-full  max-w-screen-2xl justify-center sm:flex-row sm:justify-evenly rounded-3xl m-2 relative  z-20`}
    >
      <Link href="/">
        <Logo/>
      </Link>
      <HeaderText>
        <MainTitle
          font={`${ds.className}`} styles="text-6xl" text="Talii Kitalii"
        />
        <SubTitle
          font={`${raleway.className}`} styles="text-4xl" text="African Safaris"
        />
        <MainText text="To travel is to life"/>
      </HeaderText>
    </header>
  )
}
