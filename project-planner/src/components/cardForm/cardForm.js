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
                <div className='form-container'>
                <input id='input' onChange={handleFormChange} name='eventName' value={event.eventName} className='input' type='text'></input>
                <button id='add' onClick={handleSubmit} className='button is-small'>+</button>
                <button id='delete' onClick={handleDelete} className='button is-small'>x</button>
                </div>
            </div>
        </div>
    );
}

