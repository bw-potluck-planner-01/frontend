import * as yup from 'yup'

const searchSchema = yup.object().shape({
    search: yup
    .string()
    .min(1, "What are you looking for?")
    .required('Looking for someone?')
})
export default searchSchema