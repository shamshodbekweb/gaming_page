import React from 'react'
import "../footer/style.css"
import group from "../../assets/Group 74.png"

function Footer() {
       return (
              <div>
                     <div className="container">
                            <div className="vrapper">
                                  <img src={group} alt="" />
                            </div>
                     </div>
              </div>
       )
}

export default Footer