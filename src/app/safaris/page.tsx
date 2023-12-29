import {
  Footer, Header, Main, Navbar
} from '@/src/components/templates'

export default function SafarisPage () {
  return (
    <div
      className=" landing flex min-h-screen flex-col bg-[url('/elephant.jpg')] bg-cover relative "
    >
      <div
        className="absolute w-full h-full  bg-main-light opacity-60 z-10"
      ></div>
      <Navbar/>
      <Header/>
      <Main>
        <p> Here I will put offers of possible safaris activities depending on time or area
        </p>
      </Main>
      <Footer/>
    </div>

  )
}
