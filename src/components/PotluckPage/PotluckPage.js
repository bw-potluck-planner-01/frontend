import React from 'react';
import { useState, useEffect } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import { useParams } from 'react-router-dom';
import PotluckLocation from './PotluckLocation';
import PotluckItems from './PotluckItems';
import './PotluckItems'


export default function PotluckPage() {
    const params = useParams();
    console.log(params);
    const [potluckInfo, setPotluckInfo] = useState({
        potluck_name: '',
        date: '',
        time: '',
        location: ''
    });

    const [potluckItems, setPotluckItems] = useState([])

    useEffect(() => {
        console.log(`the id of this page is ${params.id}`)
        axiosWithAuth().get(`https://potluckplannerplus.herokuapp.com/potlucks/${params.id}`)
            .then(res => {
                console.log(res.data)
                setPotluckInfo(res.data)
                axiosWithAuth().get(`https://potluckplannerplus.herokuapp.com/potlucks/${params.id}/menu`)
                    .then(res => {
                        console.log(res.data)
                        setPotluckItems(res.data)
                    })
                    .catch(err => {
                        console.error(err)
                    })
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return (
        <div className="PotluckPage">
            <PotluckLocation
                potluck_name={potluckInfo.potluck_name}
                date={potluckInfo.date}
                time={potluckInfo.time}
                location={potluckInfo.location}
            />                                          {/* CHANGE THE 1 TO WHATEVER THE POTLUCK ID IS ASAP */}
            <PotluckItems items={potluckItems} potluckId={1} />
        </div>
    )


};
