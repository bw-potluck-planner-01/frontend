import React from 'react'
import food4 from '../assets/food4.jpg'
import styled from 'styled-components'

const StyledHome = styled.div`
  .home .top h2{
    background-color:#8D98A7;
    width:80%;
    margin-left:10%;
    color:balck;
    border-radius:10px;
    box-shadow: 6px 6px 7px 1px #A7754D;
    
  }
  .top p {
    padding: 2%;
    margin: 5%;
    border-radius:10px;
    color:#646E78;
    background-color:#EAB464;
    font-size:110%;
    box-shadow: 6px 6px 7px 1px #A7754D;
  }
  img {
    box-shadow: 6px 6px 7px 1px #A7754D;
  }
`

function Home (){
    return (
   <StyledHome>
    <div className='home'>
        <div className='top'>
            <h2>Welcome to Potluck Planner Plus!</h2>
            <p>Potluck planner Plus is an easy-to-use app that fits any size or style of gathering, from work gatherings to cookouts. When it comes to planning potlucks, Plus is your go-to!</p>
        </div>
        <img src={food4} alt='pumpkin pie and peppermint bark'/>
    </div>
   </StyledHome>
    )
}

export default Home