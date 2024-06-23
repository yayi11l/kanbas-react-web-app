import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ],
  todo: { title: "Learn Mongo" },
};
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodos = [
          ...state.todos, //copy old todos, append new todo
        { ...action.payload, id: new Date().getTime().toString() }, // in action.payload, override id as timestamp

      ];
      state.todos = newTodos;// update todos
      state.todo = { title: "" }; // clear todo
    },
    deleteTodo: (state, action) => {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload); // action contains todo's ID to filter out of newTodos
      state.todos = newTodos;
    },
    updateTodo: (state, action) => {
      const newTodos = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.todos = newTodos;
      state.todo = { title: "" };
    },
    setTodo: (state, action) => {
      state.todo = action.payload;
    },
  },
});
export const { addTodo, deleteTodo, updateTodo, setTodo } = todosSlice.actions;
export default todosSlice.reducer;