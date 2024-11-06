import React, { useState } from 'react';


function CreatePlan() {
  const [plan, setPlan] = useState([]);
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');

  const handleAddExercise = () => {
    if (exercise && duration) {
      setPlan([...plan, { exercise, duration }]);
      setExercise('');
      setDuration('');
    }
  };

  const handleClearPlan = () => {
    setPlan([]);
  };

  return (
    <div className="create-plan">
      <h1>Create Your Workout Plan</h1>
      <p className="intro">
        Build a custom workout plan tailored to your goals! Consistency is key—add exercises and track your progress.
      </p>

      <div className="form">
        <input
          type="text"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          placeholder="Exercise Name"
        />
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Duration (e.g., 30 mins)"
        />
        <button onClick={handleAddExercise} disabled={!exercise || !duration}>
          Add Exercise
        </button>
      </div>

      <div className="plan">
        <h2>Your Plan</h2>
        {plan.length > 0 ? (
          <ul>
            {plan.map((item, index) => (
              <li key={index}>
                <strong>{item.exercise}</strong> - {item.duration}
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-plan">No exercises added yet. Start building your plan!</p>
        )}
      </div>

      {plan.length > 0 && (
        <button className="clear-button" onClick={handleClearPlan}>
          Clear Plan
        </button>
      )}

      <div className="tips">
        <h3>Workout Tips:</h3>
        <ul>
          <li>Warm-up before starting any intense workout.</li>
          <li>Focus on form to avoid injuries.</li>
          <li>Set realistic goals and increase intensity gradually.</li>
          <li>Stay hydrated and rest between sets.</li>
        </ul>
      </div>
    </div>
  );
}

export default CreatePlan;
