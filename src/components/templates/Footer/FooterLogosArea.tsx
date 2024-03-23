import { LogoInstagram } from '@/src/components/base/Logos/LogoInstagram'
import { LogoFacebook }  from '@/src/components/base/Logos/LogoFacebook'
import { LogoPhone }     from '@/src/components/base/Logos/LogoPhone'
import { LogoMail }      from '@/src/components/base/Logos/LogoMail'
import { LogoWhatsApp }  from '@/src/components/base/Logos/LogoWhatsApp'

interface FooterLogosAreaProps{
  color:string
}
export const FooterLogosArea = ({color}:FooterLogosAreaProps) => {
  return (
    <div className="flex flex-row justify-center text-main-dark uppercase">
      <LogoInstagram  href="https://www.instagram.com/talii_kitalii_african_safaris/" text="Instagram" width={24} height={24} color={color}/>
      <LogoFacebook href="https://www.facebook.com/calvin.lema.31" text="Facebook" width={24} height={24} color={color}/>
      <LogoPhone text="Call me"  href="tel:+255688246560" width={24} height={24} color={color}/>
      <LogoMail text="Send e-mail"  href="mailto:kevin@taliikitalii.com" width={24} height={24} color={color}/>
      <LogoWhatsApp href="https://wa.link/as6pjd" text="WhatsApp me" width={24} height={24} color={color}/>
    </div>
  )

}
