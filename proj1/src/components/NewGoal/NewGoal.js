import React from 'react';
import './NewGoal.css';



    const NewGoal = props => {
        let enteredText= '';
        const addGoalHandler = event => {
            event.preventDefault();

            const newGoal = {
                id: Math.random().toString(),
                text : enteredText
            };

            enteredText='';

            console.log(newGoal);

            props.onAddGoal(newGoal);
    };

    const textChangeHandler= event => {
        enteredText = event.target.value;
    };

    return (
    <form className="NewGoal" onSubmit={addGoalHandler}>
        <input type='text' value={enteredText} onChange={textChangeHandler} />
        <button type='submit'>Add Goal</button>
    </form>
    );
};

export default NewGoal;