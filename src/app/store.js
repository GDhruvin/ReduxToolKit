import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});


// configureStore is a function provided by Redux Toolkit that simplifies the setup of a Redux store. It provides good defaults and reduces the amount of boilerplate code needed.
// configureStore is called to create the Redux store.
// The reducer property is set to todoReducer. This means that the todoReducer will handle the state updates for the store. In a more complex application, you might have multiple reducers combined into a single root reducer.