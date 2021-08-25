import React, { useState, useEffect } from 'react';
import PotList from './PotList'
import * as yup from 'yup';
import schema from './validation/formSchema'
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth'
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { truncate } from 'prelude-ls';

const StyledLuck = styled.div`
  header h1{
    background-color:#8D98A7;
    width:80%;
    margin-left:10%;
    color:balck;
    border-radius:10px;
    box-shadow: 6px 6px 7px 1px #A7754D;
  }
`

const initialFormValues = {
    place: '',
    date: '',
    time: '',
    name: '',
  }
  const initialFormErrors = {
    place: '',
    date: '',
    time: '',
    name: '',
  }
  const initialDisabled = truncate

function Pot(props) {
   const [formValues, setFormValues] = useState(initialFormValues)
   const [formErrors, setFormErrors] = useState(initialFormErrors)
   const [disabled, setDisabled] = useState(initialDisabled)
   const {push} = useHistory()
   const {userId} = props

   console.log(userId)

   const postNewPot = newPot => {
     axiosWithAuth().post(`https://potluckplannerplus.herokuapp.com/org/${userId}`, newPot)
     .then(res => {
         push('/potlucks')
     }).catch(err => console.error(err))
     setFormValues(initialFormValues)
   }

   const validate = (name, value) => {
       yup.reach(schema, name)
       .validate(value)
       .then(() => setFormErrors({ ...formErrors, [name]: '' }))
       .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
   }

   const inputChange = (name, value) => {
      console.log(name, value)
      validate(name, value)
      setFormValues({
          ...formValues,
          [name]: value
      })
   }

   const formSubmit = () => {
     const newPotluck = {
        place: formValues.place,
        date: formValues.date,
        time: formValues.time,
        name: formValues.name,
     }
     postNewPot(newPotluck)
   }

   useEffect(() => {
       schema.isValid(formValues).then(valid => setDisabled(!valid))
   }, [formValues])

   return (
       <StyledLuck>
         <div className='Pot'>
           <header><h1>Create a New Potluck</h1></header>

           <PotList
             values={formValues}
             change={inputChange}
             submit={formSubmit}
             disabled={disabled}
             errors={formErrors} 
           />
         </div>
       </StyledLuck>
   );
}

function mapStateToProps (state){
  return ({
    userId: state.userId
  })
}

export default connect(mapStateToProps)(Pot)