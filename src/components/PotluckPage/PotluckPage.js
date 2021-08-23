import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

export default function PotluckPage(){
    const params = useParams();
    console.log(params);
    const [potluckInfo, setPotluckInfo] = useState ({
        Place: '',
        Date: '',
        Time: ''
    });

    useEffect( () => {
        console.log(`the id of this page is ${params.id}`)
    })

    return(
        <div>something</div>
    )

};
