import Image, { StaticImageData } from 'next/image'
interface PictureProps{
  src:string |StaticImageData
  alt:string
  width:number,
  height:number
}

export const Picture=({ src,alt, width, height}:PictureProps)=>{
  return(
      <Image src={src} alt={alt} width={width} height={height} className="w-full h-full p-2 rounded-2xl " style={{
        width: 'auto', height: 'auto'
      }
      }/>
  )
}
