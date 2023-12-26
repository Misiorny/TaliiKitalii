interface MainTextProps {
  text: string
}

export const MainText = ({ text }: MainTextProps) => {
  return (
    <p className="inline-block px-2 py-4 text-3xl font-semibold text-main-dark tracking-wider">
      {text}
    </p>
  )
}
