import {
  Footer, Header, LandingCard, Main, Navbar
} from '@/src/components/templates'

export default function OffersPage () {
  return (
    <div className=" landing flex min-h-screen flex-col bg-[url('/tanzania.jpg')] bg-cover relative ">
      <div className="absolute w-full h-full  bg-main-light opacity-60 z-10"></div>
      <Header >
      <Navbar/>
      </Header>
      <Main>
        <LandingCard/>
      </Main>
      <Footer/>

    </div>

  )
}
