interface MainTextProps {
  text: string
}

export const MainText = ({ text }: MainTextProps) => {
  return (
    <p className="inline-block px-2 py-4 text-2xl font-semibold">
      {text}
    </p>
  )
}
