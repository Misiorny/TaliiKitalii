interface OtherTitleProps {
  styles?: string,
  text: string,
  font?: string
}

export const OtherTitle = ({ font, styles, text }: OtherTitleProps) => {
  return (
    <h3
      className={`${font} ${styles} text-2xl font-bold py-4 px-2 text-center text-main-dark`}
    >{text}</h3>
  )
}
