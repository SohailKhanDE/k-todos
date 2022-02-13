import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import TodoShelf from "./TodoShelf";
import {addTodoEntry} from "../../features/todoSlice";

const Todos = () => {
    const [newTodoEntry, setNewTodoEntry] = useState("");
    const {entries} = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (newTodoEntry === "") {
            return;
        }

        dispatch(addTodoEntry(newTodoEntry));
        setNewTodoEntry("");
    };

    const myThoughts = ["Play Tennis", "Walk 6 KM", "Drink a Glass of Water", "Plant a Tree", "GogShopping"];

    return (
        <>
            <div className="absolute inset-x-0 top-0 flex items-start justify-center flex-col">
                <section className="w-full px-3 antialiased lg:px-6">
                    <form onSubmit={onFormSubmit}>
                        <div className="mx-auto max-w-7xl">
                            <div className="container py-12 mx-auto text-center sm:px-4">
                                <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl filter transition duration-300 drop-shadow-xl">
                                    <span className="block">What's on your mind today?</span></h1>
                                <div className="relative flex items-center max-w-md mx-auto mt-12 overflow-hidden text-center rounded-full">
                                    <input type="text" placeholder={myThoughts[Math.floor(Math.random()*myThoughts.length)]} value={newTodoEntry} className="w-full h-12 px-6 py-2 font-medium text-indigo-800 focus:outline-none" onChange={(e) => {
                                        setNewTodoEntry(e.target.value);
                                    }}/> <span className="relative top-0 right-0 block">
                <button type="submit" className="inline-flex items-center w-32 h-12 px-8 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-indigo-400 border border-transparent hover:bg-indigo-700 focus:outline-none active:bg-indigo-700">
                  Add
                </button>
              </span>
                                </div>
                                <div className="mt-8 text-sm text-indigo-300">Type-In some Task and press Enter or Add Button.</div>
                            </div>
                        </div>
                    </form>
                </section>
                <section className="w-full px-3 antialiased lg:px-6">
                    <TodoShelf entries={entries}/>
                </section>

            </div>
        </>
    );
};

export default Todos;
