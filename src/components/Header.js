import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import axiosWithAuth from '../utils/axiosWithAuth'
import pic from '../assets/pic11.jpg'

function Header () {
    const token = localStorage.getItem('TOKEN')

    function handleClick(e){
        e.preventDefault()
        localStorage.removeItem('TOKEN')
    }

    return <Heading>
        <Headnav>
            <Link classname='null' to='/'><button>Home</button></Link>
            {token && <Link classname='null' to='/potluck'><button>Potlucks</button></Link>}
            {!token && <Link classname='null' to='/login'><button>Login</button></Link>}
            {!token && <Link classname='null' to='/signup'><button>Signup</button></Link>}
            {token && <Link><button onClick={handleClick}>Logout</button></Link>}
        </Headnav>
    </Heading>
}

export default Header

const Headnav = styled.nav`
    width: 40%;
    display: flex;
    justify-content: space-around;
    margin: 2% 5%;
    button{
      padding-top:5%;
      padding-bottom:5%;
      width: 130%;
      border-radius:10px;
      color:black;
      background-color:#EAB464;
      font-size:90%;
    }
    button:hover{
        box-shadow: 2px 2px 0px 0px black;
    }
`

const Heading = styled.header`
    display: flex;
    justify-content: flex-end;
    background: url(${pic})
`