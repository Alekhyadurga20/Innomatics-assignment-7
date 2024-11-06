import React, { useState } from 'react';


function WorkoutLog() {
  const [log, setLog] = useState([]);
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  // Handle workout logging
  const handleLogWorkout = () => {
    if (exercise && sets && reps && weight) {
      setLog([...log, { exercise, sets, reps, weight }]);
      setExercise('');
      setSets('');
      setReps('');
      setWeight('');
    }
  };

  return (
    <div className="workout-log">
      <h1>Workout Log</h1>
      <p className="intro">
        Keep track of your workouts and monitor your progress. Logging your sets, reps, and weight helps you track improvement and stay motivated!
      </p>

      {/* Workout log form */}
      <div className="log-form">
        <input
          type="text"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          placeholder="Exercise"
        />
        <input
          type="number"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          placeholder="Sets"
        />
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          placeholder="Reps"
        />
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Weight (kg)"
        />
        <button onClick={handleLogWorkout}>Log Workout</button>
      </div>

      {/* Display logged workouts */}
      <div className="log">
        <h2>Logged Workouts</h2>
        {log.length === 0 ? (
          <p>No workouts logged yet. Start adding your workouts!</p>
        ) : (
          <ul>
            {log.map((item, index) => (
              <li key={index}>
                {item.exercise} - {item.sets} sets, {item.reps} reps, {item.weight} kg
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Fitness Tips */}
      <div className="fitness-tips">
        <h3>Fitness Tips</h3>
        <ul>
          <li><strong>Warm up</strong> before each session to avoid injuries.</li>
          <li><strong>Track your progress</strong> consistently to stay motivated.</li>
          <li><strong>Focus on proper form</strong> to prevent strain and injury.</li>
          <li><strong>Hydrate</strong> well and take breaks as needed during workouts.</li>
        </ul>
      </div>
    </div>
  );
}

export default WorkoutLog;
