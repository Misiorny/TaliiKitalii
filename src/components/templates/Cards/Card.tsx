import { Picture } from '@/src/components/base/Pictures/Picture'
import {  ButtonCta, OtherTitle } from '@/src/components/base'
import {
  Paragraph
} from '@/src/components/base/Text/Paragraph'

import { StaticImageData } from 'next/image'

interface CardProps {
  src: string | StaticImageData,
  width: number,
  height: number,
  alt: string,
  text: string,
  title: string
}

export const Card = ({ src, width, height, alt, text, title }: CardProps) => {
  return (
    <div>
      <OtherTitle text={title}/>
      <Picture src={src} width={width} height={height} alt={alt}/>
      <Paragraph text={text}/>
      <div className="landing_btnarea justify-center flex m-3 p-2">
        <ButtonCta to="/climbing/" text="See more"/>
      </div>
    </div>
  )
}
