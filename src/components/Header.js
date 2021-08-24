import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import pic from '../assets/pic11.jpg'

function Header () {
    const token = localStorage.getItem('token')

    return <Heading>
        <Headnav>
            <Link classname='null' to='/'><button>Home</button></Link>
            {token && <Link classname='null' to='/potluck'><button>Potlucks</button></Link>}
            {!token && <Link classname='null' to='/login'><button>Login</button></Link>}
            {!token && <Link classname='null' to='/signup'><button>Signup</button></Link>}
            {token && <Link><button>Logout</button></Link>}
        </Headnav>
    </Heading>
}

export default Header

const Headnav = styled.nav`
    width: 40%;
    display: flex;
    justify-content: space-around;
    margin: 1% 5%;
`

const Heading = styled.header`
    display: flex;
    justify-content: flex-end;
    background: url(${pic})
`