interface ListItemProps{
  text:string
}

export const ListItem=({text}:ListItemProps)=>{
  return(
    <li className="max-w-fit rounded-lg p-2 hover:text-complementary-light hover:bg-main-dark">
      {text}
    </li>
  )
}
