"use client"
import {
  BurgerButton,  ListItem, UnorderedList
} from '@/src/components/base'
import Link                                    from 'next/link'
import { useState } from 'react'

export const Navbar = () => {
  const [isClicked, setIsClicked]=useState(false)

  const handleClick=()=>{
    setIsClicked(!isClicked)
    console.log('was clicked and show menu', "done")
  }

  return (
    <nav className=" uppercase font-bold z-20 relative flex flex-row min-w-full justify-evenly" onClick={handleClick}>

      <BurgerButton style={isClicked?'z-50 flex':''} />

      <UnorderedList style={isClicked?'flex flex-col absolute top-2 left-2 bg-main-light z-15 w-full  ':'hidden'}>
        <Link href='/#climbing/'><ListItem text="climbing"/></Link>
        <Link href='/#safaris/'><ListItem text="safaris"/></Link>
        <Link href='/#schools/'><ListItem text="schools"/></Link>
        <Link href='/#offers/'><ListItem text="offers"/></Link>
      </UnorderedList>
    </nav>
  )
}
