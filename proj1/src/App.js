import React, { useState } from 'react';
import './App.css';
import GoalList from './components/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

function App() {

  const [courseGoals, setCourseGoals] = useState([
    {id:'cg1', text:'Item 1'},
    {id:'cg2', text:'Item 2'},
    {id:'cg3', text:'Item 3'}
  ]);

  const addNewGoalHandler = newGoal => {
    setCourseGoals(courseGoals.concat(newGoal));
  };

  return (
   <div className = "course-goals"> 
      <h2> course Goals</h2>
      <NewGoal onAddGoal = {addNewGoalHandler} />
      <GoalList goals={courseGoals} />
      
   </div>
  );
}

export default App;
