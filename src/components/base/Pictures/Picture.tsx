import Image, { StaticImageData } from 'next/image'

interface PictureProps {
  src: string | StaticImageData
  alt: string
  width: number,
  height: number,
  imgTxt:string
}

export const Picture = ({ src, alt, width, height, imgTxt }: PictureProps) => {
  return (
    <div className={`flex flex-col mx-auto content-center rounded-2xl p-2 max-h-[${height}px]`} >
      <Image
        src={src} alt={alt} width={width} height={height}
        className= {`h-${height} w-${width} rounded-2xl border-2 border-main-dark`}
          style={{width: `${width}`, height: `${height}`}}
      />
      <p className="py-1 text-center text-sm text-main-dark md:text-xl">{imgTxt}</p>
    </div>
  )
}
