import Image from 'next/image'
interface PictureProps{
  src:string
  alt:string
}

export const Picture=({ src,alt}:PictureProps)=>{
  return(
      <Image src={src} alt={alt} width={100} height={240} className="w-full h-full p-2 rounded-2xl"/>
  )
}
