import React from 'react';

export default function Headers(props) {
    return(
        <div>
        <div className='header'>
            <h1 id='main-header' className='is-size-3'>Project Planner</h1>
            </div>
            <div className='date is-size-5 has-text-white mb-4 ml-3'>
            <h2 id='current-date'>{props.today}</h2>
            <h3 id='current-time'>{props.time}</h3>
            </div>
            </div>
    )
}