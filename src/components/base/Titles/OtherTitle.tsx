import { bodoni } from '@/src/app/fonts'

interface OtherTitleProps {
  text: string,
}

export const OtherTitle = ({  text }: OtherTitleProps) => {
  return (
    <h3
      className={`${bodoni.className}  text-2xl font-bold py-4 px-2 text-center text-main-dark`}
    >{text}</h3>
  )
}
