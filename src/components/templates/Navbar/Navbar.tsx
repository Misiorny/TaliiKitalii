'use client'
import {
  BurgerButton, ListItem, UnorderedList
}                   from '@/src/components/base'
import Link         from 'next/link'
import { useState } from 'react'

export const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }
  return (
    <nav
      className="absolute top-0 z-20 flex min-w-full flex-row justify-evenly font-bold uppercase sm:relative"
      onClick={handleClick}
    >
      <BurgerButton style={isClicked ? 'z-50 flex' : 'z-20'}/>
      <UnorderedList
        style={isClicked ? 'flex flex-col absolute top-0 left-0 z-20 w-full  opacity-90 ' : 'hidden'}
      >
        <Link href="/climbing"><ListItem text="climbing"/></Link>
        <Link href="/safaris"><ListItem text="safaris"/></Link>
        <Link href="/schools"><ListItem text="schools"/></Link>
        <Link href="/other"><ListItem text="other"/></Link>
        <Link href="/faq"><ListItem text="faq"/></Link>
        <Link href="/about"><ListItem text="about"/></Link>
      </UnorderedList>
    </nav>
  )
}
