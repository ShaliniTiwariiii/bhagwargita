import React from 'react'
import { useRecoilState } from 'recoil';
import {modeAtom}from '../Atom'
import {Link} from 'react-router-dom'
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
function Navbar() {
  const[modes,setmodes]=useRecoilState(modeAtom)
  function handleMode(){
    setmodes(!modes)
    }
  return (
    <div className='Navbar'style={modes?{background:'#343434'}:{background:'gray'}}>
      <Link to='/' style={{color:'white'}}>
        eGita
      </Link>
      
      <Link to='Shlok' style={{color:'white'}}>
        Slok
      </Link>
      
         <button className='modeBtn' onClick={handleMode}> {modes?   <LightModeIcon  />:<NightlightIcon/>}</button> 
    </div>
  )
}

export default Navbar
