import React from 'react'
import Sidebar from "../sidebar/Sidebar";

function Header({ setIsAdding }) {
    return (

        <header>
            <Sidebar/>
            {/* <h1>Mettletech</h1> */}
            {/* <div style={{ }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>ADD USER</button>
            </div> */}
        </header>
    )
}

export default Header