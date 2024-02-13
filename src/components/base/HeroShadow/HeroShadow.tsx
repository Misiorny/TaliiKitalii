interface HeroShadowProps  {
  bgColor:string,
  opacityValue:number
}
export const HeroShadow = ({bgColor, opacityValue}:HeroShadowProps) => {
  return (

    <div className={`absolute z-10 h-full w-full opacity-${opacityValue} bg-${bgColor}`}></div>
  )
}
