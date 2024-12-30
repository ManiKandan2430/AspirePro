import React from 'react'
import logo from '../assets/logo.ico'

const Logo = () => {
  return (
    <div className='flex items-center gap-4 lg:text-2xl'>
      <img
        className="rounded-full"
        src={logo}
        width={30}
        height={30}
        alt="Logo"
      />
      <h1 className=''>AspirePro</h1>
    </div>
  );
}
export default Logo
