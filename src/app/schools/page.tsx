import {
  Footer, Header, Main
} from '@/src/components/templates'

export default function SchoolsPage () {
  return (
    <div className=" landing flex min-h-screen flex-col relative ">

      <Header/>
      <Main>
        <p> Here I will put offers for schools
        </p>
      </Main>
      <Footer/>
    </div>

  )
}
