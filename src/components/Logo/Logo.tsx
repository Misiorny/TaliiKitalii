import logo from '../../assets/png/logo_talii.png'
import Image from 'next/image'

export const Logo = () => {
  return (
    <Image
      src={logo} alt="Logo of Talii Kitalii"
      sizes="(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 33vw"
      priority={true} className="p-2 max-h-72 mx-auto"
    />
  )
}
