import React from 'react';
import { useState, useEffect } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import { useParams } from 'react-router-dom';



const PotluckItems = props => {
    const {items, setItems} = props;
    const params = useParams();


    const [inputField, setInputField] = useState("");

    const inputChange = (e) => {
        setInputField(e.target.value);
    }

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
            <label>
                Add Item 
                <input onChange={inputChange} id='add' type='text' name='addBar' value={formData.add} placeholder='Add Something'></input>
            </label>
            <button onClick = {submit}>
                Submit
            </button>
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
