import { ChangeEvent, FC, FormEvent, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { ITodo } from "../../Interfaces/Todo";

interface IProps {
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoForm: FC<IProps> = ({ todos, setTodos }) => {
    const [todo, setTodo] = useState<string>("");

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value);
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setTodos([
            ...todos,
            { id: Date.now(), text: todo, completed: "pending" },
        ]);
        setTodo("");
    };

    return (
        <form className="todo-form" onSubmit={onSubmit}>
            <input
                type="text"
                name="todo"
                id="todo"
                value={todo}
                placeholder="Add new todo ..."
                onChange={onChange}
                className="todo-input"
            />
            <button type="submit" className="submit-btn">
                <AiFillPlusCircle className="icon" />
                Add Todo
            </button>
        </form>
    );
};

export default TodoForm;
