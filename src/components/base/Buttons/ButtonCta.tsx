import Link from 'next/link'

interface ButtonCtaProps {
  text: string,
  to:string
}

export const ButtonCta = ({ to,text }: ButtonCtaProps) => {
  return (
    <Link href={to}>
      <button className="bg-complementary text-2xl py-4 px-8 rounded-2xl font-bold tracking-wider text-main-light">
        {text}
      </button>
    </Link>
  )
}
