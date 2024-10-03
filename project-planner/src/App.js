import React from 'react';
import dayjs from 'dayjs';
import Header from './components/header/header';
import Card from './components/card/card';
import './styles/style.css';

export default function App() {
    const today = dayjs().format('MMM D, YYYY');
    const time = dayjs().format('h:mm A');
    return(
        <div className='body'>
            <Header today={today} time={time} />
            <div className='main'>
                <Card today={today} />
            </div>
        </div>
    );
}