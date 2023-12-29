import {
  Footer, Header, Main, Navbar
} from '@/src/components/templates'

export default function ClimbingPage () {
  return (
    <div className=" landing flex min-h-screen flex-col bg-[url('/kili.jpg')] bg-cover relative ">
      <div className="absolute w-full h-full  bg-main-light opacity-60 z-10"></div>
      <Navbar/>
      <Header />
      <Main>
        <p> Here I will put offers of possible Kilimanjaro climbing divided by routes or time,

        </p>
      </Main>
      <Footer/>
    </div>

  )
}
