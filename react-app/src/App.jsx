import { Link, Outlet } from "react-router-dom";
import TodoList from "./components/todoList/Todo-List";

function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="todo">Todo List</Link>
        <Link to="about">About</Link>
      </header>
      <Outlet />
    </>
  );
}

export default App;
