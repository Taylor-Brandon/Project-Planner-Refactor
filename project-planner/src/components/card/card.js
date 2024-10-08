import React from 'react';
import dayjs from 'dayjs';
import CardForm from '../cardForm/cardForm';

export default function Card(props) {
    const current = dayjs();
    const tomorrow = current.add(1, 'day').format('MMM D, YYYY');
    const day2 = current.add(2, 'day').format('MMM D, YYYY');
    const day3 = current.add(3, 'day').format('MMM D, YYYY');
    const day4 = current.add(4, 'day').format('MMM D, YYYY');
    const day5 = current.add(5, 'day').format('MMM D, YYYY');
    const day6 = current.add(6, 'day').format('MMM D, YYYY');

    const getTimeDiff = (time) => {
        if (time.isBefore(current, 'hour')) {
            return 'has-background-danger-dark has-text-danger';
        } else if (time.isSame(current, 'hour')) {
            return 'has-background-info-dark has-text-info';
        } else {
            return 'has-background-primary-dark has-text-primary';
        }
    };

    return (
        <div style={{ overflowX: 'auto' }}>
            <table className='table is-bordered is-hoverable'>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>{props.today}</th>
                        <th>{tomorrow}</th>
                        <th>{day2}</th>
                        <th>{day3}</th>
                        <th>{day4}</th>
                        <th>{day5}</th>
                        <th>{day6}</th>
                    </tr>
                </thead>
                <tbody>
                    {props.timeSlots.map((slot) => (
                        <tr key={slot.id}>
                            <th className={`time-slot ${getTimeDiff(slot.dayJs)}`}>{slot.realTime}</th>
                            <td><CardForm timeSlot={slot} day={props.today} /></td>
                            <td><CardForm timeSlot={slot} day={tomorrow} /></td>
                            <td><CardForm timeSlot={slot} day={day2} /></td>
                            <td><CardForm timeSlot={slot} day={day3} /></td>
                            <td><CardForm timeSlot={slot} day={day4} /></td>
                            <td><CardForm timeSlot={slot} day={day5} /></td>
                            <td><CardForm timeSlot={slot} day={day6} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
