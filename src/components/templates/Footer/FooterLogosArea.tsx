import { LogoInstagram } from '@/src/components/base/Logos/LogoInstagram'
import { LogoFacebook }  from '@/src/components/base/Logos/LogoFacebook'
import { LogoPhone }     from '@/src/components/base/Logos/LogoPhone'
import { LogoMail }      from '@/src/components/base/Logos/LogoMail'
import { LogoWhatsApp }  from '@/src/components/base/Logos/LogoWhatsApp'
export const FooterLogosArea = () => {
  return (
    <div className="flex flex-row justify-evenly ">
      <LogoInstagram  href="https://www.instagram.com/talii_kitalii_african_safaris/" text="Instagram" width={24} height={24} color="#000000"/>
      <LogoFacebook href="https://www.facebook.com/calvin.lema.31" text="Facebook" width={24} height={24} color="#000000"/>
      <LogoPhone text="Call me"  href="tel:+255688246560" width={24} height={24} color="#000"/>
      <LogoMail text="Send e-mail"  href="mailto:kevin@taliikitalii.com" width={24} height={24} color="#000"/>
      <LogoWhatsApp href="https://wa.link/as6pjd" text="WhatsApp me" width={24} height={24} color="#000"/>

    </div>
  )

}
