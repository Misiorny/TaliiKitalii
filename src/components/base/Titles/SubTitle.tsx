interface SubTitleProps {
  styles?: string,
  text: string,
  font?: string
}

export const SubTitle = ({ font, styles, text }: SubTitleProps) => {
  return (
    <h2
      className={`${font} ${styles}  font-bold py-4 px-2 text-center text-main-dark tracking-wider`}
    >{text}</h2>
  )
}
