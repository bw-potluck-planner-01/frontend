import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const PotluckItems = props => {
    const {items} = props;

    return (

        <div>
            <h3>{items}</h3>
        </div>

    )
}



export default PotluckItems;
