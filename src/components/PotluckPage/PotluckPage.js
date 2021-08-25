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
        potluck_name: '',
        date: '',
        time: '',
        location: ''
    });

    useEffect( () => {
        console.log(`the id of this page is ${params.id}`)
        axiosWithAuth().get(`https://potluckplannerplus.herokuapp.com/org/${params.id}/potlucks`)
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
                potluck_name={potluckInfo.potluck_name}
                date={potluckInfo.date}
                time={potluckInfo.time}
                location={potluckInfo.location}
            />
        </div>
    )


};
