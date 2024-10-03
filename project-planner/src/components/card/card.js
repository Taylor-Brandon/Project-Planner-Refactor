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
    return(
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
                <tr>
                    <th>All Day</th>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                </tr>
                <tr>
                    <th>1 am</th>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                </tr>
                <tr>
                    <th>2 am</th>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                </tr>
                <tr>
                    <th>3 am</th>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                </tr>
                <tr>
                    <th>4 am</th>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                </tr>
                <tr>
                    <th>5 am</th>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                </tr>
                <tr>
                    <th>6 am</th>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                </tr>
                <tr>
                    <th>7 am</th>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                </tr>
                <tr>
                    <th>8 am</th>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                </tr>
                <tr>
                    <th>9 am</th>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                </tr>
                <tr>
                    <th>10 am</th>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                </tr>
                <tr>
                    <th>11 am</th>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                </tr>
                <tr>
                    <th>12 pm</th>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                </tr>
                <tr>
                    <th>1 pm</th>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                </tr>
                <tr>
                    <th>2 pm</th>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                </tr>
                <tr>
                    <th>3 pm</th>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                </tr>
                <tr>
                    <th>4 pm</th>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                </tr>
                <tr>
                    <th>5 pm</th>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                </tr>
                <tr>
                <th>6 pm</th>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                </tr>
                <tr>
                    <th>7 pm</th>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                </tr>
                <tr>
                    <th>8 pm</th>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                </tr>
                <tr>
                    <th>9 pm</th>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                </tr>
                <tr>
                    <th>10 pm</th>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                </tr>
                <tr>
                    <th>11 pm</th>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                </tr>
                <tr>
                    <th>12 am</th>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                    <td><CardForm /></td>
                </tr>
            </tbody>
        </table>
        </div>
    );
}