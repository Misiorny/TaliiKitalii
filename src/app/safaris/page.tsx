import {
  Footer, Header, Main
} from '@/src/components/templates'

export default function SafarisPage () {
  return (
    <div className="relative flex min-h-screen flex-col" >
      <Header/>
      <Main>
        <p> Here I will put offers of possible safaris activities depending on
            time or area
        </p>
      </Main>
      <Footer/>
    </div>

  )
}
