interface ListItemProps{
  text:string
}

export const ListItem=({text}:ListItemProps)=>{
  return(
    <li className="min-w-1/2 rounded-lg p-2 hover:text-complementary-light hover:bg-main-dark border-2 border-neutral-dark">
      {text}
    </li>
  )
}
