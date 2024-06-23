import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
  // const [todos, setTodos] = useState([
  //   { id: "1", title: "Learn React" },
  //   { id: "2", title: "Learn Node"  }]);
  // const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });
  // const addTodo = (todo: any) => {
  //   const newTodos = [ ...todos, { ...todo,
  //     id: new Date().getTime().toString() }];
  //   setTodos(newTodos);
  //   setTodo({id: "-1", title: ""});
  // };
  // const deleteTodo = (id: string) => {
  //   const newTodos = todos.filter((todo) => todo.id !== id);
  //   setTodos(newTodos);
  // };
  // const updateTodo = (todo: any) => {
  //   const newTodos = todos.map((item) =>
  //     (item.id === todo.id ? todo : item));
  //   setTodos(newTodos);
  //   setTodo({id: "-1", title: ""});
  // };
  const { todos } = useSelector((state: any) => state.todosReducer); // extract todos from reducer and remove

  return (
    <div>
      <h2>Todo List</h2>
      <ul className="list-group">
        <TodoForm />
        {todos.map((todo : any) => (
          <TodoItem
            todo={todo}/>
        ))}
        
        {/* <li className="list-group-item">
          <input value={todo.title}
            onChange={(e) =>
              setTodo({ ...todo,
                title: e.target.value })
            }
          />
          <button onClick={() => addTodo(todo)}
                  className="btn bg-success text-white me-1 float-end"
                  id="wd-add-todo-click">Add</button>
          <button onClick={() => updateTodo(todo)}
                  className="btn bg-warning me-1 float-end"
                  id="wd-update-todo-click">
            Update </button>
        </li>
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            {todo.title}
            <button onClick={() => deleteTodo(todo.id)}
                    className="btn bg-danger text-white me-1 float-end"
                    id="wd-delete-todo-click">
              Delete </button>
            <button onClick={() => setTodo(todo)}
                    className="btn btn-primary text-white me-1 float-end"
                    id="wd-set-todo-click">
              Edit </button>
          </li>
        ))} */}
      </ul>
      <hr/>
    </div>
  );
}
