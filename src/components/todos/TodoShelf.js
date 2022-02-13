import React from "react";
import uuid from 'react-uuid'
import TodoCard from "./TodoCard";

const TodoShelf = ({entries}) => {
    const COLORS = [
        "surface-blue",
        "surface-red",
        "surface-green",
        "surface-orange"
    ];

    const getEntryColor = (index) => COLORS[index % COLORS.length];

    return (
        <div>
            {entries.map(({text, isDone}, index) => (
                <span key={uuid()} className={`${getEntryColor(index)} surface-styles ${isDone ? "entry-done" : ""}`}>
            <TodoCard id={index} isDone={isDone}>
              {text}
            </TodoCard>
          </span>
            ))}
        </div>
    );
};

export default TodoShelf;
