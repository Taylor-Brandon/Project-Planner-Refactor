import React from 'react';
import dayjs from 'dayjs';
import Header from './components/header/header';
import Card from './components/card/card';
import './styles/style.css';

export default function App() {
    const today = dayjs().format('MMM D, YYYY');
    const time = dayjs().format('h:mm A');

    const timeSlots = [
        {id: 1, dayJs: dayjs().hour(1).minute(0).second(0), realTime: '1:00am'},
        {id: 2, dayJs: dayjs().hour(2).minute(0).second(0), realTime: '2:00am'},
        {id: 3, dayJs: dayjs().hour(3).minute(0).second(0), realTime: '3:00am'},
        {id: 4, dayJs: dayjs().hour(4).minute(0).second(0), realTime: '4:00am'},
        {id: 5, dayJs: dayjs().hour(5).minute(0).second(0), realTime: '5:00am'},
        {id: 6, dayJs: dayjs().hour(6).minute(0).second(0), realTime: '6:00am'},
        {id: 7, dayJs: dayjs().hour(7).minute(0).second(0), realTime: '7:00am'},
        {id: 8, dayJs: dayjs().hour(8).minute(0).second(0), realTime: '8:00am'},
        {id: 9, dayJs: dayjs().hour(9).minute(0).second(0), realTime: '9:00am'},
        {id: 10, dayJs: dayjs().hour(10).minute(0).second(0), realTime: '10:00am'},
        {id: 11, dayJs: dayjs().hour(11).minute(0).second(0), realTime: '11:00am'},
        {id: 12, dayJs: dayjs().hour(12).minute(0).second(0), realTime: '12:00pm'},
        {id: 13, dayJs: dayjs().hour(13).minute(0).second(0), realTime: '1:00pm'},
        {id: 14, dayJs: dayjs().hour(14).minute(0).second(0), realTime: '2:00pm'},
        {id: 15, dayJs: dayjs().hour(15).minute(0).second(0), realTime: '3:00pm'},
        {id: 16, dayJs: dayjs().hour(16).minute(0).second(0), realTime: '4:00pm'},
        {id: 17, dayJs: dayjs().hour(17).minute(0).second(0), realTime: '5:00pm'},
        {id: 18, dayJs: dayjs().hour(18).minute(0).second(0), realTime: '6:00pm'},
        {id: 19, dayJs: dayjs().hour(19).minute(0).second(0), realTime: '7:00pm'},
        {id: 20, dayJs: dayjs().hour(20).minute(0).second(0), realTime: '8:00pm'},
        {id: 21, dayJs: dayjs().hour(21).minute(0).second(0), realTime: '9:00pm'},
        {id: 22, dayJs: dayjs().hour(22).minute(0).second(0), realTime: '10:00pm'},
        {id: 23, dayJs: dayjs().hour(23).minute(0).second(0), realTime: '11:00pm'},
        {id: 24, dayJs: dayjs().hour(24).minute(0).second(0), realTime: '12:00am'},
    ];

    return(
        <div className='body'>
            <Header today={today} time={time} timeSlots={timeSlots} />
            <div className='main'>
                <Card today={today} timeSlots={timeSlots} />
            </div>
        </div>
    );
}