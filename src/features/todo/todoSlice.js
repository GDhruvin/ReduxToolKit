import { createSlice, nanoid } from "@reduxjs/toolkit";

// createSlice is a function provided by Redux Toolkit that helps you create a slice of your Redux state. It combines the definition of the reducer and actions into a single function, making the code more concise and easier to manage. Here's how it works:
// State: The initial state of the slice.
// Reducers: An object where the keys are action names and the values are reducer functions that handle those actions.

// nanoid is a function for generating unique IDs. It is useful for creating unique identifiers for items in your state, such as to-do items, user IDs, etc. nanoid is part of Redux Toolkit and can be used wherever you need unique IDs.

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// createSlice: This function from Redux Toolkit simplifies the process of creating a slice of state. It takes an object with three main properties: name, initialState, and reducers.

// name: The name of the slice. In this case, it's "todo". This name will be used as a prefix for the generated action types (e.g., todo/addTodo and todo/removeTodo).
// initialState: The initial state of the slice, defined above.
// reducers: An object where keys are the names of the reducer functions and values are the reducer functions themselves. These reducer functions define how the state should change in response to actions.

// addTodo: This is a placeholder for a reducer function that would handle adding a new to-do item to the list. Currently, it's an empty function.

// removeTodo: This is a placeholder for a reducer function that would handle removing a to-do item from the list. Currently, it's an empty function.

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
