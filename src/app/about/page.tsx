import {
  Footer, Header, Main
} from '@/src/components/templates'

export default function AboutPage () {
  return (
    <div className="relative flex min-h-screen flex-col landing">
      <Header />
      <Main>
        <p>Here will be information about company, payment methods and more...</p>
      </Main>
      <Footer/>

    </div>

  )
}
