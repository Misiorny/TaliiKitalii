import { FooterLogosArea } from '@/src/components/templates/Footer/FooterLogosArea'
import { Paragraph } from '@/src/components/base/Text/Paragraph'

interface FooterProps {
  styles?: string,
}

export const Footer = ({ styles }: FooterProps) => {
  return (
    <footer
      className={`max-w-screen-2xl mx-auto w-full ${styles} h-full flex flex-col text-center z-20`}
    >
      <Paragraph text="Contact us"/>
      <FooterLogosArea/>
    </footer>
  )
}
