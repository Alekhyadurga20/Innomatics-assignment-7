import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const categories = [
    { name: 'Strength', id: 1 },
    { name: 'Cardio', id: 2 },
    { name: 'Flexibility', id: 3 },
    { name: 'Balance', id: 4 },
  ];

  return (
    <div className="home">
      <h1>Fitness Categories</h1>
      <div className="categories">
        {categories.map((category) => (
          <Link key={category.id} to={`/workout/${category.id}`} className="category-card">
            <h2>{category.name}</h2>
            <p>Explore {category.name} workouts</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
