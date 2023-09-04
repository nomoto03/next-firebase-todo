import { getTodos } from "@/lib/todo";
import { TodoType } from "@/lib/todoType";

const TodoList = async () => {

  const todos: TodoType[] = await getTodos();

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center justify-between px-4 py-3 bg-white rounded">
        <span className="mr-3">{todo.title}</span>
        <div>
        <button className="text-xs text-green-700 bg-green-200 border border-green-500 p-2 mr-3 rounded-full">{todo.status}</button>
          <button className="text-sky-500 mr-3">edit</button>
          <button className="text-red-500">delete</button>
        </div>
      </li>
      ))}
    </ul>
  );
};

export default TodoList;
