import {
  Footer, Header, Main
} from '@/src/components/templates'

export default function ImportantPage () {
  return (
    <div
      className="flex min-h-screen flex-col relative "
    >

      <Header/>
      <Main>
        <p> Here I will put important information  </p>
      </Main>
      <Footer/>
    </div>

  )
}
