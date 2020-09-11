import React from 'react';
import { BsArrowReturnLeft } from "react-icons/bs";

export default function Form({ setInputText, todos, setTodos, inputText, setStatus }) {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 100 }
        ]);
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <div className="form">
            <form>
                <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
                <button onClick={submitTodoHandler} className="todo-button" type="submit"><BsArrowReturnLeft /></button>
                <select onChange={statusHandler} name="todo" className="filter-todo">
                    <option value="all">Todas</option>
                    <option value="completed">Completas</option>
                    <option value="uncompleted">Não completas</option>
                </select>
            </form>
        </div>
    );
}