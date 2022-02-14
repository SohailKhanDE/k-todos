import {createSlice} from "@reduxjs/toolkit";

// Get Tasks from Local Storage
const setInitialState = () => {
  const json = localStorage.getItem('todos');
  if (json !== null)
    {
      return {
        entries: JSON.parse(json)
      }
    } else {
    return {
      entries: [
        { text: "Visit Pakistan.", isDone: false },
        { text: "Buy Tesla", isDone: false },
        { text: "Find Job", isDone: false },
        { text: "Plant a Tree", isDone: false }
      ]
    };
  }
}


export const todoSlice = createSlice({
  name: "todos",
  initialState: setInitialState,
  reducers: {
    addTodoEntry: (state, action) => {
      state.entries.push({ text: action.payload, isDone: false });
      localStorage.setItem('todos', JSON.stringify(state.entries));
    },
    removeEntry: (state, action) => {
      state.entries.splice(action.payload, 1);
      localStorage.setItem('todos', JSON.stringify(state.entries));
    },
    toggleEntryDone: (state, action) => {
      state.entries[action.payload].isDone = !state.entries[action.payload].isDone;
      localStorage.setItem('todos', JSON.stringify(state.entries));
    }
  }
});

export const { addTodoEntry, removeEntry, toggleEntryDone} = todoSlice.actions;
export default todoSlice.reducer;

// EOF