import { Footer, Header, LandingCard, Main } from '@/src/components/templates'

export default function LandingPage () {
  return (
    <div className=" landing flex min-h-screen flex-col bg-[url('/zebras.jpg')] bg-cover relative ">
      <div className="absolute w-full h-full  bg-main-light opacity-60 z-10"></div>
      <Header />
      <Main>
        <LandingCard/>
      </Main>
      <Footer/>

    </div>

  )
}
