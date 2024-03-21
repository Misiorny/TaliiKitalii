import {LandingCard, Main} from '@/src/components/templates'

export default function LandingPage () {
  return (
    <div
      className="relative flex min-h-screen flex-col"
    >
      {/*<div*/}
      {/*  className="absolute z-10 h-full w-full opacity-60 bg-main-light"*/}
      {/*></div>*/}
      <Main>
        <LandingCard/>
      </Main>
    </div>

  )
}
