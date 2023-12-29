interface ListItemProps{
  text:string
}

export const ListItem=({text}:ListItemProps)=>{
  return(
    <li className="py-2 px-1">
      {text}
    </li>
  )
}
