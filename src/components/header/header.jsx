import React from 'react'
import TopBar from './topBar/topBar'
import MiddleBar from './middleBar/middleBar'
import BottomNav from './bottomNav/bottomNav'

const Header = () => {
  return (
   <header>
    <TopBar/>
    <MiddleBar/>
    <BottomNav/>
   </header>
  )
}

export default Header