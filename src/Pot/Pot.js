import React, { useState, useEffect } from 'react';
import PotList from './PotList'
import PotCard from './PotCard'
import axios from 'axios';
import * as yup from 'yup';
import schema from './validation/formSchema'
import styled from 'styled-components';

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
    food: '',
  }
  const initialFormErrors = {
    place: '',
    date: '',
    time: '',
    food: '',
  }
  const initialPot = []
  const initialDisabled = true

export default function Pot(props) {
   const [pot, setPot] = useState(initialPot)
   const [formValues, setFormValues] = useState(initialFormValues)
   const [formErrors, setFormErrors] = useState(initialFormErrors)
   const [disabled, setDisabled] = useState(initialDisabled)

   const getPot = () => {
       axios.get('https://potluckplannerplus.herokuapp.com/')
       .then(res => {
           setPot(res.data);
       }).catch(err => console.error(err))
   }

   const postNewPot = newPot => {
     axios.post('https://potluckplannerplus.herokuapp.com/')
     .then(res => {
         setPot([res.data, ...pot]);
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
        food: formValues.food,
     }
     postNewPot(newPotluck)
   }

   useEffect(() => {
       getPot()
   }, [])

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

           {
               pot.map(pot => {
                   return (
                       <PotCard key={pot.id} details={pot}/>
                   )
               })
           }
         </div>
       </StyledLuck>
   );
}
