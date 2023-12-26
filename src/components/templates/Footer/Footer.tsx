
interface FooterProps{
  styles?:string,
  text:string
}

export const Footer=({styles,text}:FooterProps)=>{
  return(
    <footer
      className={`max-w-screen-2xl mx-auto w-full ${styles} z-20 m-2`}
    >
      <p className='px-2 py-4 text-center text-main-dark bg-main-light'>
        {text}
      </p>
    </footer>
  )
}
