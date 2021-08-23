import React from 'react'
import {Link} from 'react-router-dom'

function Header () {
    return <header>
        <nav>
            <Link classname='null' to='/'><button>Home</button></Link>
            <Link classname='null' to='/potluck'><button>Potlucks</button></Link>
            <Link classname='null' to='/login'><button>Login</button></Link>
            <Link classname='null' to='/signup'><button>Signup</button></Link>
            <button className='logout'>Logout</button>
        </nav>
    </header>
}

export default Header