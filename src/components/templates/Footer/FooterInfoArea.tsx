import Link from 'next/link'

export const FooterInfoArea=()=>{
  return(
    <div className="footer_info_area flex justify-center">
      <Link
        href="https://www.misiorny.eu" rel="noopener noreferrer" target="_blank"
        className="px-1 pb-2  font-extralight text-main-dark hover:font-bold"
      >misiorny.eu</Link>

    </div>
  )
}
