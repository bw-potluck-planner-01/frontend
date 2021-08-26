import axiosWithAuth from "../utils/axiosWithAuth";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as yup from 'yup';
import schema from './validation/searchSchema'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

const StyledSave = styled.div`
  #searchBtn{
    width:30%;
  }
  button{
    background-color:#8D98A7;
    width:50%;
    color:balck;
    border-radius:10px;
  }
  button:hover{
    color:white;
    background-color:green;
  }
  .potluck-card{
    display:flex;
    flex-flow:wrap column;
    color:black;
    background-color:#EAB464;
    font-size:100%;
    box-shadow: 6px 6px 7px 0px #A7754D;
    border:2px dashed #8D98A7;
    width:30%;
    margin-left:35%;
    margin-top:1%;
    border-radius:10px;
  }
 input{
        border-radius:10px;
        width:29.5%;
        display:flex;
        margin-left:35%;
 }
 input:hover{
    box-shadow: 6px 6px 7px 1px #A7754D;
 }
 p{
     font-size: 110%
  }
  h4{
      font-size: 120%
  }
  .search-errors{
    border-radius:10px;
    color:red;
    background-color:#EAB464;
    width:30%;
    margin-left:35%;
    margin-top:1%;
    margin-bottom:1%;
    box-shadow: 6px 6px 7px 1px #A7754D;
  }
  .delete{
    margin-left:25%;
  }
  .delete:hover{
    background-color:red;
    font-size:120%;
  }
`

function SavedLuck(props) {
    const [search, setSearch] = useState('')
    const [pot, setPot] = useState([])
    const [disabled, setDisabled] = useState(true)
    const [searchErrors, setSearchErrors] = useState('')
    const [reload, setReload] = useState(false)
    const {user_id} = props
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
    }, [reload])

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
    const Btn = (obj) => {
      const Delete = () => {
        axiosWithAuth().delete(`https://potluckplannerplus.herokuapp.com/potlucks/${obj.potluck_id}`)
        .then(res => {
          setReload(!reload)
        })
      }  
        if(obj.organizer_id == user_id){
            return(
             <>
              <button className='delete' onClick={Delete}>Delete</button>
             </>
            )
        }else{return (<Link to={`/potlucks/${obj.potluck_id}`}><button>Join</button></Link>)}    
  }  
    return (
     <StyledSave>
        <div className='savedLuck'>
            <div className='search-errors'>
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
             <p>{evt.location}</p>
             <p>{evt.date}</p>
             <p>{evt.time}</p>
             {Btn(evt)}
            </div>
        )
            })}
            </div>
     </StyledSave>
    )
}

function mapStateToProps (state){
    return ({
        user_id: state.userId
    })
}

export default connect(mapStateToProps)(SavedLuck)