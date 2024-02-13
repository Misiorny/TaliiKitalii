import Link from 'next/link'

interface LogoPhoneProps{
  width:number,
  height:number,
  color:string,
  href:string
  text:string

}

export const LogoPhone=({width,height,color,href, text}:LogoPhoneProps)=>{
  return(
    <Link href={href} rel="noopener noreferrer" target="_blank">
      <section className="flex p-4 sm:flex-col sm:items-center">
        <svg
          width={width} height={height} viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill={color}
            d="M13 8a3 3 0 0 1 3 3a1 1 0 0 0 2 0a5 5 0 0 0-5-5a1 1 0 0 0 0 2"
          />
          <path
            fill={color}
            d="M13 4a7 7 0 0 1 7 7a1 1 0 0 0 2 0a9 9 0 0 0-9-9a1 1 0 0 0 0 2m8.75 11.91a1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a9.91 9.91 0 0 1-4.87-4.89C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72a3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2A4.6 4.6 0 0 0 2 6.6A15.42 15.42 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6a4.77 4.77 0 0 0-.06-.76a4.34 4.34 0 0 0-.19-.73M17.4 20A13.41 13.41 0 0 1 4 6.6A2.61 2.61 0 0 1 6.6 4h.33L8 8.64l-.54.28c-.86.45-1.54.81-1.18 1.59a11.85 11.85 0 0 0 7.18 7.21c.84.34 1.17-.29 1.62-1.16l.29-.55L20 17.07v.33a2.61 2.61 0 0 1-2.6 2.6"
          />
        </svg>
        <p className="hidden sm:flex">{text}</p>
      </section>
    </Link>
  )
}