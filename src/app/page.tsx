import {
  Footer, Header, LandingCard, Main
} from '@/src/components/templates'

export default function LandingPage () {
  return (
    <div
      className=" landing flex min-h-screen flex-col bg-[url('/zebras.jpg')]  bg-cover relative "
    >
      <div
        className="absolute z-10 h-full w-full opacity-60 bg-main-light"
      ></div>
      <Header/>
      <Main>
        <LandingCard/>
      </Main>
      <Footer/>
    </div>

  )
}
