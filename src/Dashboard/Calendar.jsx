import React, { useState } from 'react';

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDates, setSelectedDates] = useState([]);

    const daysShortArr = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (month, year) => {
        return new Date(year, month, 1).getDay();
    };

    const getPrevMonth = () => {
        setCurrentMonth(prevMonth => new Date(prevMonth.getFullYear(), prevMonth.getMonth() - 1, 1));
    };

    const getNextMonth = () => {
        setCurrentMonth(prevMonth => new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 1));
    };

    const handleDateClick = (date) => {
        const formattedDate = date.toISOString().split('T')[0];
        if (selectedDates.includes(formattedDate)) {
            setSelectedDates(prevSelectedDates => prevSelectedDates.filter(d => d !== formattedDate));
        } else {
            setSelectedDates(prevSelectedDates => [...prevSelectedDates, formattedDate]);
        }
    };

    const generateDaysArr = () => {
        const daysInMonth = getDaysInMonth(currentMonth.getMonth(), currentMonth.getFullYear());
        const firstDayOfMonth = getFirstDayOfMonth(currentMonth.getMonth(), currentMonth.getFullYear());
        const daysArr = [];

        // Add days from the previous month
        for (let i = firstDayOfMonth - 1; i >= 0; i--) {
            const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0 - i);
            daysArr.push(
                <div
                    key={`prev-${i}`}
                    className={`text-gray-400 cursor-pointer ${selectedDates.includes(date.toISOString().split('T')[0]) ? 'bg-blue-500 text-white' : ''}`}
                    onClick={() => handleDateClick(date)}
                >
                    {getDaysInMonth(currentMonth.getMonth() - 1, currentMonth.getFullYear()) - i}
                </div>
            );
        }

        // Add days for the current month
        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
            daysArr.push(
                <div
                    key={`current-${i}`}
                    className={`cursor-pointer ${selectedDates.includes(date.toISOString().split('T')[0]) ? 'bg-blue-500 text-white' : ''}`}
                    onClick={() => handleDateClick(date)}
                >
                    {i}
                </div>
            );
        }

        // Add days from the next month
        for (let i = 1; firstDayOfMonth + daysInMonth > daysShortArr.length * 7; i++) {
            const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, i);
            daysArr.push(
                <div
                    key={`next-${i}`}
                    className={`text-gray-400 cursor-pointer ${selectedDates.includes(date.toISOString().split('T')[0]) ? 'bg-blue-500 text-white' : ''}`}
                    onClick={() => handleDateClick(date)}
                >
                    {i}
                </div>
            );
        }

        return daysArr;
    };

    return (
        <div className="bg-white rounded-lg shadow-xl max-w-[23rem] px-8 py-6">
            <div className="flex items-center justify-between mb-4">
                <button
                    className="font-extrabold text-xl"
                    onClick={getPrevMonth}
                >
                    &larr;
                </button>
                <h2 className="text-xl font-bold">
                    {currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}
                </h2>
                <button
                    className="font-extrabold text-xl"
                    onClick={getNextMonth}
                >
                    &rarr;
                </button>
            </div>
            <div className="grid grid-cols-7 gap-2">
                {daysShortArr.map(day => (
                    <div key={day} className="text-gray-500 font-bold">
                        {day}
                    </div>
                ))}
                {generateDaysArr()}
            </div>
            <div className="mt-4">
                <h3 className="text-lg  mb-2">Selected Dates:</h3>
                <div className="flex flex-wrap">
                    {selectedDates.map(date => (
                        <div
                            key={date}
                            className="pl-2 text-gray-700 "
                        >
                            {new Date(date).toDateString()}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calendar;