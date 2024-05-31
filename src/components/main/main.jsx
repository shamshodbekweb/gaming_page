import React from 'react'
import "../main/style.css"
import group from "../../assets/Group 2.png"
import console from "../../assets/pngwing.com (2).png"
import groups from "../../assets/Group 10.png"

function Main() {
  return (
    <div>
        <div className="container">
                <div className="vrapper">
                    <div className="info">
                        {/* <h1 className='information'>New Games That You <img src={console} alt="" /></h1>
                        <p className='desc'>Gaming and Sports Template that is designed to build modern Online Game, Gaming News Portal, Gaming Online News Portal, and other News services websites and it is suitable for any kind of small business activity.</p> */}
                        <img src={groups} alt="" />
                    </div>
                    <div className="img">
                        <img src={group} alt="" />
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Main