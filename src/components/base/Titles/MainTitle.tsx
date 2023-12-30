import { camila } from '@/src/app/fonts'

interface MainTitleProps {
  text: string,
}

export const MainTitle = ({ text }: MainTitleProps) => {
  return (
    <h1
      className={`${camila.className}  text-4xl font-bold py-2 px-1 text-center text-main-dark tracking-wider `}
    >{text}</h1>
  )
}
