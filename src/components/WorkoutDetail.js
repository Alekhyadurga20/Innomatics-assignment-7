import React from 'react';
import { useParams } from 'react-router-dom';

function WorkoutDetail() {
  const { id } = useParams();

  // Mock workout details
  const workouts = {
    1: [
      { name: 'Squats', description: 'Do 3 sets of 12 reps', duration: '10 minutes' },
      { name: 'Deadlift', description: 'Do 4 sets of 10 reps', duration: '15 minutes' },
    ],
    2: [
      { name: 'Running', description: 'Run for 30 minutes', duration: '30 minutes' },
      { name: 'Cycling', description: 'Cycle for 20 minutes', duration: '20 minutes' },
    ],
    // Add more workout categories and exercises here...
  };

  const workoutCategory = workouts[id] || [];

  return (
    <div className="workout-detail">
      <h1>Workout Details</h1>
      {workoutCategory.length > 0 ? (
        workoutCategory.map((exercise, index) => (
          <div key={index} className="exercise">
            <h2>{exercise.name}</h2>
            <p>{exercise.description}</p>
            <p>Duration: {exercise.duration}</p>
          </div>
        ))
      ) : (
        <p>No exercises found for this category</p>
      )}
    </div>
  );
}

export default WorkoutDetail;