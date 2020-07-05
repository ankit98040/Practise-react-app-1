import React from 'react';
import './NewGoal.css';



    const NewGoal = () => {
        const addGoalHandler = event => {
            event.preventDefault();

            const newGoal = {
                id: Math.random().toString(),
                text : 'New Goal'
            };

            console.log(newGoal);

            props.onAddGoal(newGoal);
    };
    return (
    <form className="NewGoal" onSubmit={addGoalHandler}>
        <input type='text' />
        <button type='submit'>Add Goal</button>
    </form>
    );
};

export default NewGoal;