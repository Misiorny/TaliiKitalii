import { NavItem } from '@/src/components/base/Navbar/NavItem'
import { LogoBurger } from '@/src/components/base/Logo/LogoBurger'
import { NavGroup } from '@/src/components/base/Navbar/NavGroup'

export const Navigation=()=>{
  return(
    <nav className="h-fit w-full  ">
      <LogoBurger/>
        <NavGroup text="offers">
          <NavGroup text="climbing">
            <NavItem text="kilimanjaro"/>
            <NavItem text="mount meru"/>
          </NavGroup>
          <NavGroup text="safaris">
            <NavItem text="serengeti"/>
            <NavItem text="ngorongoro"/>
            <NavItem text="lake elyasi"/>
            <NavItem text="arusha np"/>
          </NavGroup>
          <NavGroup text="walking and chili">
            <NavItem text="citi walk"/>
            <NavItem text="chemka hot springs"/>
          </NavGroup>
          <NavGroup text="schools">
              <NavItem text="tanzania tribes"/>
              <NavItem text="tanzania animals"/>
          </NavGroup>
        </NavGroup>
    </nav>
  )
}
