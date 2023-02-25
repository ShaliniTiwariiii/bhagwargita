import React from 'react'

import {NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <div className='Navbar'>
      <NavLink to='/' style={{color:'white'}}>
        eGita
      </NavLink>
      
      <NavLink to='Shlok' style={{color:'white'}}>
        Shloke
      </NavLink>
    </div>
  )
}

export default Navbar
