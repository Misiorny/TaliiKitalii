import Image from 'next/image'
interface PictureProps{
  src:string
  alt:string
}

export const Picture=({ src,alt}:PictureProps)=>{
  return(
      <Image src={src} alt={alt} width={200} height={340} className="w-full h-full p-2 rounded-2xl drop-shadow-2xl" style={{
        width: 'auto', height: 'auto'
      }
      }/>
  )
}
