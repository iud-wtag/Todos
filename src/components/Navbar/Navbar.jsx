import React from 'react'
import Logo from 'components/Navbar/controllers/Logo';
import Search from 'components/Navbar/controllers/Search';
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