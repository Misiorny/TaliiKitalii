import {
  FooterLogosArea
}                    from '@/src/components/templates/Footer/FooterLogosArea'
import { Paragraph } from '@/src/components/base/Text/Paragraph'
import {
  FooterTextArea
}                    from '@/src/components/templates/Footer/FooterTextArea'
import {
  FooterInfoArea
}                    from '@/src/components/templates/Footer/FooterInfoArea'

interface FooterProps {
  styles?: string,
}

export const Footer = ({ styles }: FooterProps) => {
  return (
    <footer
      className={`max-w-screen-2xl mx-auto  w-full ${styles} h-full flex flex-col `}
    >
      <section className="m-2 rounded-xl shadow-xl shadow-main-dark  ">
        <FooterTextArea>
          <Paragraph text="Contact us" textColor="main-dark"/>
        </FooterTextArea>
        <FooterLogosArea color="#331C00"/>
        <FooterInfoArea/>
      </section>
    </footer>
  )
}
