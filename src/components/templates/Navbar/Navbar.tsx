import {  ListItem, UnorderedList } from '@/src/components/base'
import Link                         from 'next/link'

export const Navbar = () => {
  return (
    <nav className=" uppercase font-bold">
      <UnorderedList>
        <Link href='/climbing/'><ListItem text="climbing"/></Link>
        <Link href='/safaris/'><ListItem text="safaris"/></Link>
        <Link href='/schools/'><ListItem text="schools"/></Link>
        <Link href='/offers/'><ListItem text="offers"/></Link>
      </UnorderedList>
    </nav>
  )
}
