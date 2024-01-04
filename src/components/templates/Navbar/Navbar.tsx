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
      className="relative z-20 flex min-w-full flex-row justify-evenly font-bold uppercase"
      onClick={handleClick}
    >
      <BurgerButton style={isClicked ? 'z-50 flex' : 'z-20'}/>
      <UnorderedList
        style={isClicked ? 'flex flex-col absolute top-0 left-0 bg-main-light z-20 w-full  opacity-90' : 'hidden'}
      >
        <Link href="/offers"><ListItem text="offers"/></Link>
        <Link href="/climbing"><ListItem text="climbing"/></Link>
        <UnorderedList style="">
          <Link href="/climbing/kilimanjaro"><ListItem text="Kilimanjaro"/></Link>
          <Link href="/climbing/mountmeru"><ListItem text="Mount Meru"/></Link>
        </UnorderedList>
        <Link href="/safaris"><ListItem text="safaris"/></Link>
        <UnorderedList style="">
          <Link href="/safaris/lakes"><ListItem text="Lake Elyasi"/></Link>
          <Link href="/safaris/serengeti"><ListItem text="Serengeti"/></Link>
          <Link href="/safaris/norongoro"><ListItem text="Ngorongoro"/></Link>
        </UnorderedList>
        <Link href="/schools"><ListItem text="schools"/></Link>
        <UnorderedList style="">
          <Link href="/schools/tribes"><ListItem text="Tribes of Tanzania"/></Link>
          <Link href="/schools/animals"><ListItem text="Animals of Tanzania"/></Link>
        </UnorderedList>
        <Link href="/other"><ListItem text="other"/></Link>
        <UnorderedList style="">
          <Link href="/other/chili"><ListItem text="Chemka Hot Springs"/></Link>
          <Link href="/other/walking"><ListItem text="walking in the city"/></Link>
        </UnorderedList>
      </UnorderedList>
    </nav>
  )
}
