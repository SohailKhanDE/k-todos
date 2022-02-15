import React from "react";
import uuid from 'react-uuid'
import TodoCard from "./TodoCard";

const TodoShelf = ({entries}) => {
    return (
        <div>
            {entries.map(({text, isDone}, index) => (
                <span key={uuid()}>
            <TodoCard id={index} isDone={isDone}>
              {text}
            </TodoCard>
          </span>
            ))}
        </div>
    );
};

export default TodoShelf;
