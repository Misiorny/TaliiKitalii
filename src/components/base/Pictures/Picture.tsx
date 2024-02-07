import Image, { StaticImageData } from 'next/image'

interface PictureProps {
  src: string | StaticImageData
  alt: string
  width: number,
  height: number,
  imgTxt:string
}

export const Picture = ({ src, alt, width, height,imgTxt }: PictureProps) => {
  return (
    <div className="flex flex-col justify-center p-2 rounded-2xl ">
      <Image
        src={src} alt={alt} width={width} height={height}
        className="h-full w-full rounded-2xl " style={{
        width: 'auto', height: 'auto'
      }}
      />
      <p className="text-main-dark text-center p-1 text-xs ">{imgTxt}</p>
    </div>
  )
}
