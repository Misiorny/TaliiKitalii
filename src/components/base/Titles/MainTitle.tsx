interface MainTitleProps {
  text: string,
  styles?: string,
  font?: string
}

export const MainTitle = ({ font, styles, text }: MainTitleProps) => {
  return (
    <h1
      className={`${font} ${styles} text-4xl font-bold py-2 px-1 text-center text-main-dark`}
    >{text}</h1>
  )
}
