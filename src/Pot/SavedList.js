import axiosWithAuth from "../utils/axiosWithAuth";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as yup from 'yup';
import schema from './validation/searchSchema'

export default function SavedLuck(props) {
    const [search, setSearch] = useState('')
    const [pot, setPot] = useState([])
    const [disabled, setDisabled] = useState(true)
    const [searchErrors, setSearchErrors] = useState('')
    
    const getPot = () => {
        axiosWithAuth().get(`https://potluckplannerplus.herokuapp.com/potlucks`)
        .then(res => {
            setPot(res.data);
            console.log(res)
        }).catch(err => console.error(err))
    }
    useEffect(() => {
        getPot()
    }, [])

    const onSearch = evt => {
        const { name, value } = evt.target
        inputSearch( name ,value ) 
    }

    const inputSearch = (name, value) => {
        console.log(name, value)
        searchValidate(name, value)
        setSearch(value)
     }
     const searchValidate = (name, value) => {
        yup.reach(schema, name)
        .validate(value)
        .then(() => setSearchErrors(''))
        .catch(err => setSearchErrors(err.errors[0]))
    }
    return (
        <div className='savedLuck'>
            <div className='serach-errors'>
                <div>{searchErrors}</div>
            </div>
            <input
             value={search}
             onChange={onSearch}
             name='search'
             type="text"
            />
            <button id='searchBtn' disabled={disabled}>Search</button>
            <div className='potluck-card'>
                <h4>{pot.Organiser}</h4>
                <span>{pot.place}</span>
                <span>{pot.date}</span>
                <span>{pot.time}</span>
            </div>
        </div>
    )
}