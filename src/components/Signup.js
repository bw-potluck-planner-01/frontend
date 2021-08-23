import React, {useEffect, useState} from 'react';
import { reach } from 'yup'
import schema from '../validation/SignupSchema'
import styled from 'styled-components';

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
    robot: "You must prove you're not a robot"
}

//REPLACE CURRENT ERROR SYSTEM WITH FORM VALIDATION

function Signup (){
    const [formValues, setFormValues] = useState(initialFormValues)
    const [errors, setErrors] = useState(initialErrors)
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        schema.isValid(formValues).then(valid => setDisabled(!valid))
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
    }

    const validate = (name, value) => {
        reach(schema, name)
          .validate(value)
          .then(() => setErrors({ ...errors, [name]: '' }))
          .catch(err => setErrors({ ...errors, [name]: err.errors[0]}))
      }

    return <div className='signup'>
        <h2>Signup</h2>
        <form onSubmit={{handleClick}}>
            <Formdiv>
                <label htmlFor='username'>Username: </label>
                <input id='username' name='username' value={formValues.username} onChange={handleChange} />
            </Formdiv>
            <Formdiv>
                <label htmlFor='password'>Password: </label>
                <input id='password' name='password' value={formValues.password} onChange={handleChange} />
            </Formdiv>
            <Formdiv>
                <label htmlFor='password2'>Reenter Password: </label>
                <input id='password2' name='password2' value={formValues.password2} onChange={handleChange} />
            </Formdiv>
                <p>Please type 'I am not a robot' in the space below</p>
                <input name='robot' value={formValues.robot} onChange={handleChange} />
                <div><button disabled={disabled}>Submit</button></div>
        </form>
        <Ep>{errors.username}</Ep>
        <Ep>{errors.password}</Ep>
        <Ep>{errors.password2}</Ep>
        <Ep>{errors.robot}</Ep>
    </div>
}

export default Signup

const Formdiv = styled.div`
    width: 350px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
`

const Ep = styled.p`
    color: red;
    font-weight: bold;
    margin: 0.5%;
`