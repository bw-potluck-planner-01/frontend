import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PotluckLocation = props => {

    const {potluck_name, date, time, location} = props;


    return (
        
        <div>
            <header>{potluck_name}</header>
            <h2>{date}</h2>
            <h3>{time}</h3>
            <h3>{location}</h3>
        </div>

    )
}


export default PotluckLocation;