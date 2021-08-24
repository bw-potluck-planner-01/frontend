import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PotluckLocation = props => {

    const {place, date, time} = props;


    return (
        
        <div>
            <header>{place}</header>
            <h2>{date}</h2>
            <h3>{time}</h3>
        </div>

    )
}


export default PotluckLocation;