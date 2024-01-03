import { BurgerLogo } from '@/src/components/base'

interface BurgerButtonProps  {
  style:string
}
export const BurgerButton = ({style}:BurgerButtonProps) => {
  return (

      <button className={`absolute top-2 right-4 sm:hidden ${style}}`} >
        <BurgerLogo color="#005D23" clickedColor="#3B2207" width="48" height="48"/>
      </button>

  )
}
