import React, { useState, useEffect } from 'react';

export default function CardForm (props) {
    const [event, setEvent] = useState({ eventName: '', eventTime: '' });


    useEffect(() => {
        const savedEvent = JSON.parse(localStorage.getItem(`event-${props.timeSlot.id}`));
        if (savedEvent) {
            setEvent(savedEvent); 
        }
    }, [props.timeSlot.id]);

    
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setEvent((prevEvent) => ({
            ...prevEvent,
            [name]: value,
        }));
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();

        
        localStorage.setItem(
            `event-${props.timeSlot.id}`, 
            JSON.stringify({ eventName: event.eventName, eventTime: props.timeSlot.time })
        );

        console.log("Saved Event:", { eventName: event.eventName, eventTime: props.timeSlot.time });
    };

    
    const handleDelete = (e) => {
        e.preventDefault();

       
        localStorage.removeItem(`event-${props.timeSlot.id}`);

        setEvent({ eventName: '', eventTime: '' });
        alert('Event Deleted!');
    };

    return (
        <div className='field'>
            <div className='control'>
                <div className='form-container'>
                    <input 
                        id='input' 
                        onChange={handleFormChange} 
                        name='eventName' 
                        value={event.eventName} 
                        className='input' 
                        type='text' 
                    />
                    
                  
                    <button id='add' onClick={handleSubmit} className='button is-small'>+</button>
                    
                    
                    <button id='delete' onClick={handleDelete} className='button is-small'>x</button>
                </div>
            </div>
        </div>
    );
}

