import { camila } from '@/src/app/fonts'

interface SubTitleProps {
  text: string,
}

export const SubTitle = ({  text }: SubTitleProps) => {
  return (
    <h2
      className={`${camila.className}  font-bold py-4 px-2 text-center text-main-dark tracking-wider text-4xl uppercase`}
    >{text}</h2>
  )
}
