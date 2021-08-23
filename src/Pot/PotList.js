import React from 'react'

export default function PotForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.perventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value } = evt.target

        change( name, value )
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='errors'>
               <div>{errors.place}</div>
               <div>{errors.date}</div>
               <div>{errors.time}</div>
               <div>{errors.food}</div>
            </div>

            <div className='form-potluck inputs'>
                <label>Location
                    <input
                       value={values.place}
                       onChange={onChange}
                       name='place'
                       type='text'
                    />
                </label>

                <lable>Date
                    <input
                       value={values.date}
                       onChange={onChange}
                       name='date'
                       type='text'
                    />
                </lable>

                <label>Time
                    <input
                       value={values.time}
                       onChange={onChange}
                       name='time'
                       type='text'
                    />
                </label>

                <lable>Food
                    <input
                       value={values.food}
                       onChange={onChange}
                       name='food'
                       type="text"
                    />
                </lable>
            </div>
            <button id='submitBtn' disabled={disabled}>Submit</button>
        </form>
    )
}