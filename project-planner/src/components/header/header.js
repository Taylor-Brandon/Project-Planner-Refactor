import React from 'react';
import dayjs from 'dayjs';

export default function Headers() {
    const today = dayjs().format('MMM D, YYYY');
    const time = dayjs().format('h:mm A');
    return(
        <div className='main'>
            <h1>Project Planner</h1>
            <h2>{today}</h2>
            <h3>{time}</h3>
        </div>
    )
}