import { ButtonCta } from '@/src/components/base'

export const LandingBtnArea=()=>{
  return (
    <div className="m-3 flex justify-center p-2 landing_btnarea">
      <ButtonCta text="See our trips" to="/offers"/>
    </div>
  )
}
