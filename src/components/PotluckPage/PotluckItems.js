import React from 'react';
import { useState, useEffect } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import { useParams } from 'react-router-dom';


const PotluckItems = props => {
    const {items, potluckId} = props;
    const params = useParams();

    const [inputField, setInputField] = useState("");

    const inputChange = (e) => {
        setInputField(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        axiosWithAuth().post(`https://potluckplannerplus.herokuapp.com/potlucks/${params.id}/menu`, { food_item: inputField})
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }

    const [formData, setFormData] = useState("");

    return (
    <>
        <form onSubmit={submit}>
            <label>
                Add Item 
                <input onChange={inputChange} id='add' type='text' name='addBar' value={formData.add} placeholder='Add Something'></input>
            </label>
        </form>

        <div>
            <h3>{items}</h3>
        </div>
    </>
    )
}



export default PotluckItems;
