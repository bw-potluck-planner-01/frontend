import React from 'react'
import food4 from '../assets/food4.jpg'

function Home (){
    return <div className='home'>
        <div className='top'>
            <h2>Welcome to Potluck Planner Plus!</h2>
            <p>Potluck planner Plus is an easy-to-use app that fits any size or style of gathering, from work gatherings to cookouts. When it comes to planning potlucks, Plus is your go-to!</p>
        </div>
        <img src={food4} alt='pumpkin pie and peppermint bark'/>
    </div>
}

export default Home