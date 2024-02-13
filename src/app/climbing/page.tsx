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
    <div className=" flex min-h-screen flex-col relative ">

      <Header />
      <Main>
       <KilimanjaroRoutes/>
        <MountMeruRoutes/>
      </Main>
      <Footer/>
    </div>

  )
}
