import React from 'react';
import { useState, useEffect } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import { useParams } from 'react-router-dom';
import PotluckLocation from './PotluckLocation';
import PotluckItems from './PotluckItems';
import './PotluckItems';
import styled from 'styled-components';

const StyledPage = styled.div`
.PotluckPage {
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
`

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
                        console.log('something')
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
        <StyledPage>
        <div className="PotluckPage">
            <PotluckLocation
                potluck_name={potluckInfo.potluck_name}
                date={potluckInfo.date}
                time={potluckInfo.time}
                location={potluckInfo.location}
            />                                         
            <PotluckItems items={potluckItems} setItems={setPotluckItems} />
        </div>
        </StyledPage>
    )


};
