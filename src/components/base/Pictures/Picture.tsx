import Image, { StaticImageData } from 'next/image'
interface PictureProps{
  src:string |StaticImageData
  alt:string
  width:number,
  height:number
}

export const Picture=({ src,alt, width, height}:PictureProps)=>{
  return(
      <Image src={src} alt={alt} width={width} height={height} className="h-full w-full rounded-2xl p-2" style={{
        width: 'auto', height: 'auto'
      }
      }/>
  )
}
