import React, { useContext } from 'react'


const Navbar = () => {


  return (
    <div className='navbar'>
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img  alt="" />
        <span></span>
        <button >logout</button>
      </div>
    </div>
  )
}

export default Navbar