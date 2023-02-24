import React from 'react'

import {NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <div className='Navbar'>
      <NavLink to='/'>
        eGita
      </NavLink>
      <NavLink to='/'>
        Home
      </NavLink>
      <NavLink to='Shlok'>
        Shloke
      </NavLink>
    </div>
  )
}

export default Navbar
