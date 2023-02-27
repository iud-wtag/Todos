import React from 'react'
import Logo from './controllers/Logo'
import Search from './controllers/Search'
const Navbar = () => {
  return (
    <div className='navbarBack'>
      <div className="container">
        <div className='navbar'>
          <Logo/>
          <Search/>
        </div>
      </div>
    </div>
    
  )
}

export default Navbar