import React, {useEffect, useState} from 'react';
import { reach } from 'yup'
import schema from '../validation/SignupSchema'

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
            <label htmlFor='username'>Username: </label>
            <input id='username' name='username' value={formValues.username} onChange={handleChange} />
            <label htmlFor='password'>Password: </label>
            <input id='password' name='password' value={formValues.password} onChange={handleChange} />
            <label htmlFor='password2'>Reenter Password: </label>
            <input id='password2' name='password2' value={formValues.password2} onChange={handleChange} />
            <p>Please type 'I am not a robot' in the space below</p>
            <input name='robot' value={formValues.robot} onChange={handleChange} />
            <button disabled={disabled}>Submit</button>
        </form>
        <p>{errors.username}</p>
        <p>{errors.password}</p>
        <p>{errors.password2}</p>
        <p>{errors.robot}</p>
    </div>
}

export default Signup