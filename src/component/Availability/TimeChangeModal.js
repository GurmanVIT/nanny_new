import React, { useState } from 'react'

const TimeChangeModal = ({ isOpen, onClose, onApply }) => {

    const [newTime, setNewTime] = useState('');

    const handleApply = () => {

      onApply(newTime);
      onClose();
    };


    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Change Time</h2>
                <input type="time" value={newTime} onChange={(e) => setNewTime(e.target.value)} />
                <button onClick={handleApply}>Apply</button>
            </div>
        </div>
    )
}

export default TimeChangeModal
