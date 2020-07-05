import React from 'react';
import './App.css';
import GoalList from './components/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

function App() {

  const courseGoals  = [
    {id:'cg1', text:'Item 1'},
    {id:'cg2', text:'Item 2'},
    {id:'cg3', text:'Item 3'},
  ];

  const addNewGoalHandler = (newGoal) => {
    courseGoals.push(newGoal);
    console.log(courseGoals;)
  }

  return (
   <div className = ""> 
      <h2> course Goals</h2>
      <NewGoal onAddGoal = {addNewGoalHandler} />
      <GoalList goals={courseGoals} />
      
   </div>
  );
}

export default App;
