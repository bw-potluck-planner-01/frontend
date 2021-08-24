import React from 'react';
import { useState, useEffect } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import {useParams} from 'react-router-dom';
import PotluckLocation from './PotluckLocation';
import './PotluckItems'


export default function PotluckPage(){
    const params = useParams();
    console.log(params);
    const [potluckInfo, setPotluckInfo] = useState ({
        place: '',
        date: '',
        time: ''
    });

    useEffect( () => {
        console.log(`the id of this page is ${params.id}`)
        axiosWithAuth().get('https://potluckplannerplus.herokuapp.com/')
        .then(res => {
            console.log(res.data)
            setPotluckInfo(res.data)
        })
        .catch(err => {
            console.error(err)
        })
    }, [])

    return(
        <div className="PotluckPage">
            <PotluckLocation
                place={potluckInfo.place}
                date={potluckInfo.date}
                time={potluckInfo.time}
            />
        </div>
    )


};
