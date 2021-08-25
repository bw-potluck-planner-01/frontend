import * as yup from 'yup';

const formSchema = yup.object().shape({
    place: yup
      .string()
      .required('Where are you going?'),
    date: yup
      .string()
      .required('Date is required')
      .min(8, 'Date must be 8 characters long'),
    time: yup
      .string()
      .required('Time is required')
      .min(5, "Time has been stopped"),
    Organiser: yup
      .string()
      .required('Name is required')
})

export default formSchema