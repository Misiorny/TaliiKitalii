import Image from 'next/image'
import logo  from '@/src/assets/png/logo_talii.png'
import logo_sm from '@/src/assets/png/logo_small.png'

export const Logo = () => {
  return (
    <div className='m-1 flex justify-center p-2 sm:justify-start md:justify-around xl:justify-evenly'>
      <Image src={logo} alt="Talii Kitalii logo" width={400} height={220} className="flex"  />
      {/*<Image src={logo_sm} alt="Talii Kitalii small logo" width={200} height={200} className="mx-4 hidden sm:flex"/>*/}
    </div>
  )
}
