import React, {useEffect, useState} from 'react';
import { reach } from 'yup'
import schema from '../validation/SignupSchema'
import styled from 'styled-components';
import axios from 'axios'
import { useHistory } from 'react-router';

const initialFormValues = {
    username: '',
    password: '',
    password2: '',
    robot: ''
}
const initialErrors = {
    username: 'You must supply a username',
    password: 'You must supply a password',
    password2: 'You must reenter your password',
    robot: "You must prove you're not a robot",
    backend: ''
}

const blankErrors = {
    username: '',
    password: '',
    password2: '',
    robot: '',
    backend: ''
}

function Signup (){
    const [formValues, setFormValues] = useState(initialFormValues)
    const [errors, setErrors] = useState(initialErrors)
    const [disabled, setDisabled] = useState(true)
    const { push } = useHistory()

    useEffect(() => {
        schema.isValid(formValues).then(valid => {
            setDisabled(!valid);
            if (valid){
                setErrors(blankErrors)
            }
        })
    }, [formValues])

    function handleChange (e){
        const {name, value} = e.target
        validate(name, value)
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    function handleClick (e){
        e.preventDefault()
        const newUser = {username: formValues.username, password: formValues.password}
        axios.post('https://potluckplannerplus.herokuapp.com/auth/register', newUser)
            .then(res => push('/login'))
            .catch(err => {
                setErrors({...errors, backend: err.response.data.message});
                console.log(err.response);
            })
    }   

    const validate = (name, value) => {
        reach(schema, name)
          .validate(value)
          .then(() => setErrors({ ...errors, [name]: ''}))
          .catch(err => setErrors({ ...errors, [name]: err.errors[0]}))
      }

    console.log(errors)

    return <div className='signup'>
        <h2>Signup</h2>
        <form onSubmit={handleClick}>
            <Formdiv>
                <Styinput id='username' name='username' placeholder='Username' value={formValues.username} onChange={handleChange} />
                <Styinput id='password' name='password' placeholder='Password' value={formValues.password} onChange={handleChange} />
                <Styinput id='password2' name='password2' placeholder='Retype password' value={formValues.password2} onChange={handleChange} />
            </Formdiv>
                <p>Please type 'I am not a robot' in the space below</p>
                <Styinput name='robot' value={formValues.robot} onChange={handleChange} />
                <div>{disabled ? <Disbutton disabled={disabled}>SIGN UP</Disbutton> : <Stybutton disabled={disabled}>SIGN UP</Stybutton>}</div>
        </form>
        <Ediv>
            {errors.username !== '' && <Ep>{errors.username}</Ep>}
            {errors.password !== '' && <Ep>{errors.password}</Ep>}
            {errors.password2 !== '' && <Ep>{errors.password2}</Ep>}
            {errors.robot !== '' && <Ep>{errors.robot}</Ep>}
            {errors.backend !== '' && <Ep>{errors.backend}</Ep>}
        </Ediv>
    </div>
}

export default Signup

const Formdiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
`

const Ep = styled.p`
    color: red;
    font-weight: bold;
    margin: 0.5% auto;
    padding: 2% 5%;
    border: 1px solid red;
    width: 30%;
`

const Ediv = styled.div`
    margin: 5% auto;
`

const Styinput = styled.input`
    margin: 2% auto;
    background: #DCCCBB;
    width: 50%;
    border: none;
    border-bottom: 1px solid black;
`
const buttons = `border: 1px solid #646E78;
width: 25%;
padding: 2%;`

const Stybutton = styled.button `
    background: #DCCCBB;
    color: #646E78;
    ${buttons}
`

const Disbutton = styled.button`
    ${buttons}
    background: #646E78;
    color: red;
`