import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem(
  {todo} : {todo: { id: string; title: string };}
//   { todo, deleteTodo, setTodo }: {
//   todo: { id: string; title: string };
//   deleteTodo: (id: string) => void;
//   setTodo: (todo: { id: string; title: string }) => void;
// }
) {
  const dispatch = useDispatch();

  return (
    <li key={todo.id} className="list-group-item">
      <button onClick={() => dispatch(deleteTodo(todo.id))}
              className="btn bg-danger text-white me-1 float-end"
              id="wd-delete-todo-click"> Delete </button>
      <button onClick={() => dispatch(setTodo(todo))}
              className="btn btn-primary text-white me-1 float-end"
              id="wd-set-todo-click"> Edit </button>
      {todo.title}
    </li>
  );
}
