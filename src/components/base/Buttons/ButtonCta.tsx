import Link from 'next/link'

interface ButtonCtaProps {
  text: string,
  to:string
}

export const ButtonCta = ({ to,text }: ButtonCtaProps) => {
  return (
    <Link href={to}>
      <button className="rounded-2xl px-8 py-4 text-2xl font-bold tracking-wider bg-complementary text-main-light">
        {text}
      </button>
    </Link>
  )
}
