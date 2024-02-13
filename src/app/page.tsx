import {
  Footer, Header, LandingCard, Main
} from '@/src/components/templates'

export default function LandingPage () {
  return (
    <div
      className="flex min-h-screen flex-col relative "
    >
      {/*<div*/}
      {/*  className="absolute z-10 h-full w-full opacity-60 bg-main-light"*/}
      {/*></div>*/}
      <Header/>
      <Main>
        <LandingCard/>
      </Main>
      <Footer/>
    </div>

  )
}
