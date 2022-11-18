import { FC } from "react";
import { ITodo } from "../../Interfaces/Todo";
import TodoItem from "../TodoItem/TodoItem";

interface IProps {
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoList: FC<IProps> = ({ todos, setTodos }) => {
    return (
        <ul className="todolist">
            {todos.map((todo) => {
                return (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                    />
                );
            })}
        </ul>
    );
};

export default TodoList;
