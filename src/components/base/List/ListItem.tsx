interface ListItemProps{
  text:string
}

export const ListItem=({text}:ListItemProps)=>{
  return(
    <li className="px-1 py-2 hover:border-b-complementary hover:border-b-4 max-w-fit">
      {text}
    </li>
  )
}
