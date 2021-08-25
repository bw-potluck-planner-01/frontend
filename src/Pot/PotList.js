import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';


const StyledPotluck = styled.div`
  .form{
      background-color:DCCCBB;
  }
  .inputs{
    display:flex;
    justify-content: center;
    aling-content: space-between
    flex-flow:wrap;
    width:95%;
  }
  input{
    border-radius:10px;
    box-shadow: 6px 6px 7px 1px #A7754D;
  }
  p{
    color:white;
    background-color:#646E78;
    display:flex;
    justify-content: center;
    width:95%;
    margin-left:2.5%;
    border-radius:10px;
  }
  #submitBtn{
      padding: 2%;
      margin: 5%;
      border-radius:10px;
      color:#646E78;
      background-color:#EAB464;
      font-size:90%;
      box-shadow: 6px 6px 7px 1px #A7754D;
  }
  #submitBtn:hover{
    color:white;
    background-color:#646E78;
    box-shadow: 0px 0px 0px 0px;
  }
  input:hover{
    box-shadow: 0px 0px 0px 0px; 
  }
  .errors{
    border-radius:10px;
    color:red;
    background-color:#EAB464;
    width:80%;
    margin-left:10%;
  }
`

export default function PotForm(props) {
    const { push } = useHistory()
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
        push(`/potlucks`)
    }

    const onChange = evt => {
        const { name, value } = evt.target

        change( name, value )
    }

    return (
        <StyledPotluck>
        <form className='form container' onSubmit={onSubmit}>
            <div className='errors'>
               <div>{errors.place}</div>
               <div>{errors.date}</div>
               <div>{errors.time}</div>
               <div>{errors.Organiser}</div>
            </div>

            <div className='form-potluck inputs'>
                <label><p>Location</p>
                    <input
                       value={values.place}
                       onChange={onChange}
                       name='place'
                       type='text'
                    />
                </label>

                <label><p>Date</p>
                    <input
                       value={values.date}
                       onChange={onChange}
                       name='date'
                       type='text'
                    />
                </label>

                <label><p>Time</p>
                    <input
                       value={values.time}
                       onChange={onChange}
                       name='time'
                       type='text'
                    />
                </label>

                <label><p>Organiser</p>
                    <input
                       value={values.Organiser}
                       onChange={onChange}
                       name='Organiser'
                       type="text"
                    />
                </label>
            </div>
            <button id='submitBtn' disabled={disabled}>Submit</button>
        </form>
        </StyledPotluck>
    )
}