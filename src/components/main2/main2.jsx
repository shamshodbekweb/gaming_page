import React from 'react'
import "../main2/style.css"
import group from "../../assets/Group 28.png"
import group1 from "../../assets/Group 30.png"

function Main2() {
       return (
              <div>
                     <div className="container">
                            <div className="vrapper">
                                   <div className="image">
                                          <img src={group1} alt="" />
                                   </div>
                                   <div className="info">
                                          <img className='info' src={group} alt="" />
                                   </div>
                            </div>
                     </div>
              </div>
       )
}

export default Main2