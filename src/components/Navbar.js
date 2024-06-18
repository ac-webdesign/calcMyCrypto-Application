import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav className='primary-navbar'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='settings'>Settings</NavLink>

        </nav>
    </div>
  )
}
