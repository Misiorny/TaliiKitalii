interface ListItemProps{
  text:string
}

export const ListItem=({text}:ListItemProps)=>{
  return(
    <li className="py-2 px-1 hover:border-b-4 hover:border-b-complementary">
      {text}
    </li>
  )
}
