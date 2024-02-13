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
    <div className="flex flex-col justify-center rounded-2xl p-2 ">
      <Image
        src={src} alt={alt} width={width} height={height}
        className="h-full w-full rounded-2xl" style={{
        width: 'auto', height: 'auto'
      }}
      />
      <p className="p-1 text-center text-xs text-main-dark sm:text-xl">{imgTxt}</p>
    </div>
  )
}
