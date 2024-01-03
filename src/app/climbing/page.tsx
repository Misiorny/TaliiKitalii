import {
  Footer, Header, Main
} from '@/src/components/templates'

export default function ClimbingPage () {
  return (
    <div className=" landing flex min-h-screen flex-col bg-[url('/kili.jpg')] bg-center bg-cover relative ">
      <div className="absolute z-10 h-full w-full opacity-60 bg-main-light"></div>
      <Header />
      <Main>
        <p> Here I will put offers of possible Kilimanjaro climbing divided by routes or time,

        </p>
      </Main>
      <Footer/>
    </div>

  )
}
