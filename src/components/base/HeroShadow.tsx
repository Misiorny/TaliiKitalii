
interface HeroShadowProps{
  z_index:number
  opacity_value:number
  shadow_color:string
}

export const HeroShadow=({z_index,opacity_value,shadow_color}:HeroShadowProps)=>{
  return(
    <div
      className={`absolute z-${z_index} h-full w-full opacity-${opacity_value} bg-${shadow_color}`}
    ></div>
  )
}
