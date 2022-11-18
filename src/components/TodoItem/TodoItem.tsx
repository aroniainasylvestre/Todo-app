import React, { FC, useEffect, useRef, useState } from "react";
import {
    AiFillCheckCircle,
    AiFillDelete,
    AiFillEdit,
    AiFillSave,
} from "react-icons/ai";
import { ITodo } from "../../Interfaces/Todo";

interface IProps {
    todo: ITodo;
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoItem: FC<IProps> = ({ todo, todos, setTodos }) => {
    const { id, text, completed } = todo;
    const inputRef = useRef<HTMLInputElement>(null);

    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [textValue, setTextValue] = useState<string>(text);
    const [status, setStatus] = useState<string>(completed);

    useEffect(() => {
        inputRef.current?.focus();
    }, [isEdit]);

    const editTodo = (id: number) => {
        const newTodos = [...todos];
        newTodos.forEach((todo) => {
            if (todo.id === id) {
                todo.text = textValue;
                todo.completed = status;
            }
        });
        setTodos(newTodos);
        setIsEdit(false);
    };

    const deleteTodo = (id: number): void => {
        const newTodos = todos.filter((item) => item.id !== id);
        setTodos(newTodos);
    };

    return (
        <li key={id} className="todo-item">
            <div
                className={
                    completed === "completed" ? "completed active" : "completed"
                }
            >
                <AiFillCheckCircle className="icon" />
            </div>
            {isEdit ? (
                <>
                    <input
                        type="text"
                        value={textValue}
                        onChange={(e) => setTextValue(e.target.value)}
                        className="edit-input"
                        ref={inputRef}
                    />
                    <div className="actions">
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="edit-status"
                        >
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                        </select>
                        <button
                            className="edit"
                            title="Save"
                            onClick={() => editTodo(id)}
                        >
                            <AiFillSave className="icon" />
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <div className="todo">{text}</div>
                    <div className="actions">
                        <button
                            className="edit"
                            title="Edit"
                            onClick={() => setIsEdit(true)}
                        >
                            <AiFillEdit className="icon" />
                        </button>
                        <button
                            className="delete"
                            title="Delete"
                            onClick={() => deleteTodo(id)}
                        >
                            <AiFillDelete className="icon" />
                        </button>
                    </div>
                </>
            )}
        </li>
    );
};

export default TodoItem;
