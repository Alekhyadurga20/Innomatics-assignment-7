import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use Routes instead of Switch
import Home from './components/Home';
import WorkoutDetail from './components/WorkoutDetail';
import CreatePlan from './components/CreatePlan';
import WorkoutLog from './components/WorkoutLog';
import Calendar from './components/Calendar';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>  {/* Use Routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/workout/:id" element={<WorkoutDetail />} />
          <Route path="/create-plan" element={<CreatePlan />} />
          <Route path="/workout-log" element={<WorkoutLog />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


