import React from 'react';
import { useState, useEffect } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledItems = styled.div`
.items {
    display:flex;
    flex-flow:wrap column;
    color:white;
    background-color:#8D98A7;
    font-size:100%;
    box-shadow: 6px 6px 7px 0px #A7754D;
    border:2px dashed #EAB464;
    width:10vw;
    margin: 1%auto;
    
    border-radius:10px;
    justify-content: space-between;
}

label {
    margin: 10%;
}
`

const initialValue = {salad : false, sandwich : false, fruitsalad : false, hotdogs : false, burgers : false, tacos : false, pizza : false, juice : false, tacos : false, chickennuggets : false}

const PotluckItems = props => {
    const {items, setItems} = props;
    const params = useParams();


    const [inputField, setInputField] = useState("");

    const inputChange = (e) => {
        const {value, name, checked, type} = e.target
        const valueToUse = type === 'checkbox' ? checked : value;
        setValues(name, valueToUse);
    }


    const [values, setValues] = useState(initialValue)

    const [food, setFood] = useState(false)

    const submit = (e) => {
        e.preventDefault();
        axiosWithAuth().post(`https://potluckplannerplus.herokuapp.com/potlucks/${params.id}/menu`, { food_item: inputField})
            .then(res => {
                setItems(...items, res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                console.log('call')
            })
    }



    const [formData, setFormData] = useState("");

    return (
    <>
        <form >
            {/* <label>
                Add Item 
                <input onChange={inputChange} id='add' type='text' name='addBar' value={formData.add} placeholder='Add Something'></input>
            </label>
            <button onClick = {submit}>
                Submit
            </button> */}
            <StyledItems>
            <div className = 'items'>
            <label> Salad
               <input
                 type="checkbox"
                 name='food'
                 checked={values.food}
                 onChange={inputChange}
               />
           </label>

           <label> Sandwich
               <input
                 type="checkbox"
                 name='food'
                 checked={values.food}
                 onChange={inputChange}
               />
           </label>

           <label> Fruit Salad
               <input
                 type="checkbox"
                 name='food'
                 checked={values.food}
                 onChange={inputChange}
               />
           </label>

           <label> Hotdogs
               <input
                 type="checkbox"
                 name='food'
                 checked={values.food}
                 onChange={inputChange}
               />
           </label>

           <label> Burgers
               <input
                 type="checkbox"
                 name='food'
                 checked={values.food}
                 onChange={inputChange}
               />
           </label>

           <label> Tacos
               <input
                 type="checkbox"
                 name='food'
                 checked={values.food}
                 onChange={inputChange}
               />
           </label>

           <label> Juice
               <input
                 type="checkbox"
                 name='food'
                 checked={values.food}
                 onChange={inputChange}
               />
           </label>

           <label> Chicken Nuggets
               <input
                 type="checkbox"
                 name='food'
                 checked={values.food}
                 onChange={inputChange}
               />
           </label>

           <label> Pizza
               <input
                 type="checkbox"
                 name='food'
                 checked={values.food}
                 onChange={inputChange}
               />
           </label>
           </div>
           </StyledItems>

        </form>

        <div>
            {items.map(item => {
                <h3>{item}</h3>
            })}
        </div>
    </>
    )
}



export default PotluckItems;
