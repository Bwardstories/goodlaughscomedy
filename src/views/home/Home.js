import React from 'react'
import homeLogo from '../../assets/images/homeLogo.png'
import './home.css'

const Home = () => {
  return (
    <div className="homeWrapper">
      <img src={homeLogo} alt="Good Laughs Comedy" className="homeLogo" />
      <h1 className="mainTitle">Charleston Comedy</h1>
    </div>
  )
}

export default Home
