import {
  Footer, Header, Main
} from '@/src/components/templates'

export default function AboutPage () {
  return (
    <div className=" landing flex min-h-screen flex-col relative ">
      <Header />
      <Main>
        <p>Here will be information about company, payment methods and more...</p>
      </Main>
      <Footer/>

    </div>

  )
}
