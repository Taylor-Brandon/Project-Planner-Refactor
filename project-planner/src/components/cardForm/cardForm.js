import React, { useState } from 'react';

export default function CardForm () {
    const [event, setEvent] = useState({eventName: ''});

    const handleFormChange = (e) => {
        const {name, value} = e.target;

        setEvent({
            ...event,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem("event", JSON.stringify(event));
        console.log(event);
    }

    const handleDelete = (e) => {
        e.preventDefault();

        localStorage.removeItem("event");
        setEvent({eventName: ''});
        alert('Done!');
    }

    const savedEvent = JSON.parse(localStorage.getItem("event"));


    return (
        <div className='field'>
            <div className='control'>
                <input onChange={handleFormChange} name='eventName' value={event.eventName} className='input' type='text' placeholder='Event'></input>
                <button onClick={handleSubmit} className='button is-link'>Submit</button>
                <button onClick={handleDelete} className='button is-danger'>Delete</button>
            </div>
        </div>
    );
}