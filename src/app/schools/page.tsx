import {
  Footer, Header, Main, Navbar
} from '@/src/components/templates'

export default function SchoolsPage () {
  return (
    <div
      className=" landing flex min-h-screen flex-col bg-[url('/giraffes.jpg')] bg-cover relative "
    >
      <div
        className="absolute w-full h-full  bg-main-light opacity-60 z-10"
      ></div>
      <Header><Navbar/></Header>
      <Main>
        <p> Here I will put offers for schools
        </p>
      </Main>
      <Footer/>
    </div>

  )
}
