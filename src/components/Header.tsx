import React from 'react'
import Profile from './Profile'

const Header = () => {
  return (
    <div className='' >
      <header className="bg-dark-1 h-[72px] flex justify-end items-center px-10 pt-2">
        <div className="text-lg font-semibold  float-end "><Profile /></div>
      </header>
    </div>
  )
}

export default Header
