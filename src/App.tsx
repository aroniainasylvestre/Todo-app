import { FC, useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import { ITodo } from "./Interfaces/Todo";

const initialState: ITodo[] = [];

const App: FC = () => {
    const [todos, setTodos] = useState(initialState);

    return (
        <div className="app">
            <h3 className="title">Todo App</h3>
            <TodoForm todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default App;
