import React from 'react'
import "../header/style.css"
import game_x from "../../assets/Gamix-G.png"

function Nav() {
  return (
    <div>
      <div className="container">
        <div className="vrapper">
          <div className="game_x">
            <img src={game_x} alt="" />
          </div>
          <div className="links">
            <ul>
              <li className='link'>Home</li>
              <li className='link'>Games</li>
              <li className='link'>About</li>
              <li className='link'>Contact</li>
            </ul>
            <button className='btn'>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav