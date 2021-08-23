import React from 'react'
import {Link} from 'react-router-dom'

function Header () {
    return <header>
        <nav>
            <Link classname='null' to='/'>Home</Link>
            <Link classname='null' to='/potluck'>Potlucks</Link>
            <Link classname='null' to='/login'>Login</Link>
            <Link classname='null' to='/signup'>Signup</Link>
            <div className='logout'>Logout</div>
        </nav>
    </header>
}

export default Header