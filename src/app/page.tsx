import { Header, Footer, Main }      from '@/src/components/templates'
import { MainTitle, Logo, SubTitle } from '@/src/components/base'
import {
  HeaderText
}                                    from '@/src/components/templates/Header/HeaderText'
import { MainText }    from '@/src/components/base/Text/MainText'
import { ds, raleway } from '@/src/app/fonts'
export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-light">
      <Header >
        <Logo/>
        <HeaderText>
          <MainTitle font={`${ds.className}`} styles="text-6xl" text="Talii Kitalii"/>
          <SubTitle font={`${raleway.className
          }`} styles="text-4xl" text="African Safaris"/>
          <MainText text="To travel is to life"/>
        </HeaderText>
      </Header>
      <Main >
        <p className='px-3 py-6 text-center text-6xl font-extrabold text-main-light'>African Safari</p>
      </Main>
      <Footer >
        <p className='px-2 py-4 text-center text-main-dark'>Footer</p>
      </Footer>
    </div>

  )
}
