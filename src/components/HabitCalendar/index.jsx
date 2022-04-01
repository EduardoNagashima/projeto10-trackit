import { useState } from 'react';
import Calendar from 'react-calendar';
import "./style.css";

export default function HabbitCalendar() {
    const [date, setDate] = useState(new Date());

    return (
        <div className='calendar-container'>
            <Calendar calendarType="US" locale="pt-br" onChange={setDate} value={date} />
        </div>
    );
}