import {
  Footer, Header, Main
} from '@/src/components/templates'
import {
  KilimanjaroRoutes
} from '@/src/components/templates/ClimbingCards/KilimanjaroRoutes'
import {
  MountMeruRoutes
} from '@/src/components/templates/ClimbingCards/MountMeruRoutes'

export default function ClimbingPage () {
  return (
    <div className="relative flex min-h-screen flex-col">

      <Header />
      <Main>
       <KilimanjaroRoutes/>
        <MountMeruRoutes/>
      </Main>
      <Footer/>
    </div>

  )
}
