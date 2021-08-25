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
    console.log(pot)
    console.log(search)
    const getPot = () => {
        axiosWithAuth().get(`https://potluckplannerplus.herokuapp.com/potlucks`)
        .then(res => {
            setPot(res.data);
        }).catch(err => console.error(err))
    }
    useEffect(() => {
        getPot()
    }, [])

    const onSearch = evt => {
        const { name, value } = evt.target
        inputSearch( name ,value )

    }
    const onSubmit = evt => {
       evt.preventDefault()
       setPot(pot.filter(evt => 
           evt.potluck_name.includes(search)
       ))
    }
    const inputSearch = (name, value) => {
        console.log(name, value)
        searchValidate(name, value)
        setSearch(value)
     }
     const searchValidate = (name, value) => {
        yup.reach(schema, name)
        .validate(value)
        .then(() => {
          setSearchErrors('') 
          setDisabled(!value)
        })
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
            <button id='searchBtn' disabled={disabled} onClick={onSubmit}>Search</button>

        {pot.map(evt => { return (
            <div className='potluck-card'>
             <h4>{evt.potluck_name}</h4>
             <span>{evt.location}</span>
             <span>{evt.date}</span>
             <span>{evt.time}</span>
            </div>
        )
            })}
        </div>
    )
}