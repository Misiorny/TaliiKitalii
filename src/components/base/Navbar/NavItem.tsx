
interface NavItemProps{
  text:string
}

export const NavItem=({text}:NavItemProps)=>{
  return(
    <li className="uppercase p-2 hidden">{text}</li>
  )
}
