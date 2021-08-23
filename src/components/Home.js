import React from 'react'
import food4 from '../assets/food4.jpg'

function Home (){
    return <div className='home'>
        <div className='top'>
            <h2>Welcome to BW Potluck Planner!</h2>
            <p>BW Potluck planner is an easy-to-use app that fits any size or style of gathering, from work gatherings to cookouts. When it comes to planning potlucks, BW is your go-to!</p>
        </div>
        <img src={food4} alt='pumpkin pie and peppermint bark'/>
    </div>
}

export default Home