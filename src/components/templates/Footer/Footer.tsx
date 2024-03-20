import { FooterLogosArea } from '@/src/components/templates/Footer/FooterLogosArea'
import { Paragraph } from '@/src/components/base/Text/Paragraph'

interface FooterProps {
  styles?: string,
}

export const Footer = ({ styles }: FooterProps) => {
  return (
    <footer
      className={`max-w-screen-2xl mx-auto w-full ${styles} h-full flex flex-col text-center bg-neutral-dark `}
    >
      <Paragraph text="Contact us" textColor="main-light"/>
      <FooterLogosArea color="#FFF4E6"/>
    </footer>
  )
}
