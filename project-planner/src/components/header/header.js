import React from 'react';

export default function Headers(props) {
    return(
        <div className='main'>
            <h1>Project Planner</h1>
            <h2>{props.today}</h2>
            <h3>{props.time}</h3>
        </div>
    )
}