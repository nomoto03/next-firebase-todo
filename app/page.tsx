import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";

export default function Home() {
  return (
    <main className="flex flex-col items-center jusify-center min-h-screen mt-8">
      <div className="w-full px-8 py-6 bg-gray-200 rounded-lg">
        <TodoSearch />
        <TodoList />
      </div>
    </main>
  );
}
