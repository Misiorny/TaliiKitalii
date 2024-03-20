import Link from 'next/link'

interface ButtonCtaProps {
  text: string,
  to:string
}

export const ButtonCta = ({ to,text }: ButtonCtaProps) => {
  return (
    <Link href={to}>
      <button className="rounded-2xl px-4 py-2 text-base font-bold uppercase tracking-wider shadow-xl shadow-complementary-dark bg-complementary text-main-light">
        {text}
      </button>
    </Link>
  )
}
