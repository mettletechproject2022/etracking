import React from 'react';
import"./topbar.css";


export default function topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrappper">
            <div className="topLeft">
                <span className='logo'>eTracking</span>
            </div>
                {/* <div className="topRight">
                    <div className="topbarIconContainer">
                       <span className='topIconBag'>z</span>

                    </div>
                </div> */}
           
        </div>
    </div>
  )
}
