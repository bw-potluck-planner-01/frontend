import * as yup from 'yup'

const signupSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('You must supply a username'),
    password: yup
        .string()
        .trim()
        .required('You must supply a password')
        .min(4, 'Password must be at least 4 characters long'),
    password2: yup
        .string()
        .trim()
        .required('You must reenter your password')
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    robot: yup 
        .string()
        .required("You must prove you're not a robot")
        .oneOf(['I am not a robot', null], 'Please type the provided line')
})

export default signupSchema