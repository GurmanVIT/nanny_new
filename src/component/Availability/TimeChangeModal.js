import React, { useState } from 'react'
import Calendar from 'react-calendar';

const TimeChangeModal = () => {


    const defaultHighlightedDates = [
        new Date(2024, 1, 10),
        new Date(2024, 1, 15)
    ]; // Default array of highlighted dates

    const [highlightedDates, setHighlightedDates] = useState(defaultHighlightedDates);

    const tileClassName = ({ date }) => {
        // Check if the date is one of the default highlighted dates
        const isDefaultHighlighted = defaultHighlightedDates.some(
            defaultHighlightedDate => defaultHighlightedDate.toDateString() === date.toDateString()
        );

        // Check if the date is one of the user-modifiable highlighted dates
        const isHighlighted = highlightedDates.some(
            highlightedDate => highlightedDate.toDateString() === date.toDateString()
        );

        // Return the class name based on whether the date should be highlighted or not
        return isDefaultHighlighted || isHighlighted ? 'highlighted-date' : null;
    };

    const handleCalendarClick = (date) => {
        // Check if the clicked date is one of the default highlighted dates
        const isDefaultHighlighted = defaultHighlightedDates.some(
            defaultHighlightedDate => defaultHighlightedDate.toDateString() === date.toDateString()
        );

        // If the clicked date is not one of the default highlighted dates,
        // update the highlighted dates array with the new date
        if (!isDefaultHighlighted) {
            setHighlightedDates([date]);
        }
    };

    return (
        <div>
            <Calendar
                tileClassName={tileClassName}
                onClickDay={handleCalendarClick}
            />
        </div>
    )
}

export default TimeChangeModal
