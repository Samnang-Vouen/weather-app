import { useState, useEffect } from 'react';

export default function Time({currentCity, timezoneOffset}) {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    // Update the time and date every minute
    useEffect(() => {
        const updateTimeAndDate = () => {
            const now = new Date();
            const localTime = new Date(now.getTime() + timezoneOffset * 1000);

            const hours = localTime.getUTCHours();
            const minutes = localTime.getUTCMinutes();
            const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}`;
            
            const dayOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
            const formattedDate = now.toLocaleDateString('en-US', dayOptions);
            
            setTime(formattedTime);  // Set the current time
            setDate(formattedDate);  // Set the current date
        };

        updateTimeAndDate(); // Initialize time and date on mount
        const intervalId = setInterval(updateTimeAndDate, 60000);  // Update time every minute
        
        return () => clearInterval(intervalId);  // Cleanup interval on component unmount
    }, [timezoneOffset]);

    return (
        <div className="time-container">
            <p id="location">{currentCity}</p>
            <p id="time">{time}</p>
            <p id="date">{date}</p>
        </div>
    );
}