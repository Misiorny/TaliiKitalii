import Link from 'next/link'

interface ButtonCtaProps {
  text: string,
  to:string
}

export const ButtonCta = ({ to,text }: ButtonCtaProps) => {
  return (
    <Link href={to}>
      <button>
        {text}
      </button>
    </Link>
  )
}
