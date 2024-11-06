import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function WorkoutCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [note, setNote] = useState('');
  const [extraInfo, setExtraInfo] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedDate) {
      console.log('Note added for', selectedDate);
      console.log('Note:', note);
      console.log('Extra Info:', extraInfo);
    } else {
      console.log('Please select a date');
    }
  };

  return (
    <div className="calendar-container">
      <div className="calendar">
        <h1>Workout Calendar</h1>
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>

      <div className="form-container">
        <h2>Add Important Note</h2>
        {selectedDate && <p className="selected-date">Selected Date: {selectedDate.toDateString()}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="note">Note</label>
            <textarea
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Write a note for this date..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="extraInfo">Extra Information</label>
            <textarea
              id="extraInfo"
              value={extraInfo}
              onChange={(e) => setExtraInfo(e.target.value)}
              placeholder="Any additional information..."
            />
          </div>

          <div className="form-group">
               <button type="submit" disabled={!selectedDate || !note.trim()}>
                  Save Note
                </button>
        </div>

        </form>
      </div>
    </div>
  );
}

export default WorkoutCalendar;
