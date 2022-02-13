import React from "react";
import {useDispatch} from "react-redux";
import {removeEntry, toggleEntryDone} from "../../features/todoSlice";

import Button from "@material-tailwind/react/Button";

const TodoCard = ({children, id, isDone}) => {
    const dispatch = useDispatch();

    return (
        <span className="flex items-center justify-center py-1">
          <div className="flex flex-col items-center lg:flex-row">
            <div className="w-full lg:w-1/2">
              <blockquote className="flex items-center justify-between w-full col-span-1 p-6 bg-white rounded-lg filter transition duration-300 hover:drop-shadow-xl">
                <div className="flex flex-col pr-8">
                  <div className="relative pl-12">
                    <svg className="absolute left-0 w-10 h-10 text-indigo-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                      <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"/>
                    </svg>
                      {isDone ?
                          (<p className="mt-2 text-lg text-gray-600 sm:text-base lg:text-sm xl:text-base line-through">{children}</p>) : (
                              <p className="mt-2 text-lg text-gray-600 sm:text-base lg:text-sm xl:text-base">{children}</p>)
                      }

                  </div>
                  <h3 className="flex pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
                    <span><Button onClick={() => {
                        dispatch(toggleEntryDone(id));
                    }} className="mr-4 bg-indigo-500" buttonType="filled" size="sm" rounded={false} block={false} iconOnly={false} ripple="light">
                      {isDone ? "Redo" : "Done"}
                    </Button></span><span> <Button className="bg-red-500" onClick={() => dispatch(removeEntry(id))} buttonType="filled" size="sm" rounded={false} block={false} iconOnly={false} ripple="light">
                    Remove
                  </Button></span>
                  </h3>
                </div>
                  {isDone ?
                      (<img className="flex-shrink-0 w-20 h-20 bg-gray-300 rounded-full xl:w-24 xl:h-24" src="images/task_incomplete.png" alt=""/>) : (
                      <img className="flex-shrink-0 w-20 h-20 bg-gray-300 rounded-full xl:w-24 xl:h-24 filter drop-shadow-md" src="images/task.png" alt=""/>)
                  }
              </blockquote>
            </div>
          </div>
      </span>
    );
};

export default TodoCard;
