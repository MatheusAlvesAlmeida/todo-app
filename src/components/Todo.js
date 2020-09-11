import React from 'react';
import { BsTrashFill, BsCheckBox } from 'react-icons/bs';

export default function Todo({ text, todo, todos, setTodos }) {
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    };

    const completedHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }))
    };

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}
                <button onClick={completedHandler}><BsCheckBox /></button>
                <button onClick={deleteHandler}><BsTrashFill /></button>
            </li>
        </div>
    );
}