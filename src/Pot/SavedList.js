import axiosWithAuth from "../utils/axiosWithAuth";
import React, { useEffect, useState } from "react";
import styled from "styled-components";




export default function SavedLuck(props) {
    
    const [pot, setPot] = useState([])
    


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
    return (
        <div className='savedLuck'>

        </div>
    )
}