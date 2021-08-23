import React, {useState} from 'react';

const initialFormValues = {
    username: '',
    password: '',
    password2: '',
    robot: ''
}
const initialErrors = ['']

//REPLACE CURRENT ERROR SYSTEM WITH FORM VALIDATION

function Signup (){
    const [formValues, setFormValues] = useState(initialFormValues)
    const [errors, setErrors] = useState(initialErrors)

    console.log(formValues)

    function handleChange (e){
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
        setErrors(initialErrors)
    }

    function handleClick (e){
        e.preventDefault()
        setErrors(initialErrors)
        if (formValues.robot !== 'I am not a robot'){
            setErrors([...errors, 'Please prove you are not a robot!'])
        }
        if (formValues.password !== formValues.password2){
            setErrors([...errors, 'Please make sure your passwords match!'])
        }
    }

    return <div className='signup'>
        <h2>Signup</h2>
        <form>
            <label htmlFor='username'>Username: </label>
            <input id='username' name='username' value={formValues.username} onChange={handleChange} />
            <label htmlFor='password'>Password: </label>
            <input id='password' name='password' value={formValues.password} onChange={handleChange} />
            <label htmlFor='password2'>Reenter Password: </label>
            <input id='password2' name='password2' value={formValues.password2} onChange={handleChange} />
            <p>Please type 'I am not a robot' in the space below</p>
            <input name='robot' value={formValues.robot} onChange={handleChange} />
            <button onClick={handleClick}>Submit</button>
        </form>
        {errors.map(item => <p>{item}</p>)}
    </div>
}

export default Signup