interface ListItemProps{
  text:string
}

export const ListItem=({text}:ListItemProps)=>{
  return(
    <li className="p-2 rounded-lg hover:text-complementary-light hover:bg-main-dark max-w-fit">
      {text}
    </li>
  )
}
