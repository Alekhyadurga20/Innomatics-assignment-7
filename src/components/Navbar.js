import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create-plan">Create Plan</Link></li>
        <li><Link to="/workout-log">Workout Log</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
