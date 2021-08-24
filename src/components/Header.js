import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import styled from 'styled-components'
import {connect} from 'react-redux'

import axiosWithAuth from '../utils/axiosWithAuth'
import pic from '../assets/pic11.jpg'
import {logoutTemp} from '../action/LoginAction'

function Header (props) {
    const {token} = props
    const { push } = useHistory()

    function handleClick(e){
        e.preventDefault()
        localStorage.removeItem('TOKEN')
        props.logoutTemp()
        push('/')
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

function mapStateToProps (state){
    return {
        token: state.token,
      };
}

export default connect (mapStateToProps, {logoutTemp})(Header)

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