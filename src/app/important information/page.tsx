import {
  Footer, Header, Main
} from '@/src/components/templates'

export default function ImportantPage () {
  return (
    <div
      className=" landing flex min-h-screen flex-col bg-[url('/elephant.jpg')] bg-center bg-cover relative "
    >
      <div
        className="absolute z-10 h-full w-full opacity-60 bg-main-light"
      ></div>
      <Header/>
      <Main>
        <p> Here I will put important information  </p>
      </Main>
      <Footer/>
    </div>

  )
}
