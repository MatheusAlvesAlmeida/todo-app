import React from 'react';
import Todo from './Todo';

export default function List({ todos, setTodos, filteredTodos }) {
    return (
        <div className="list">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo todos={todos} todo={todo} setTodos={setTodos} key={todo.id} text={todo.text} />
                ))}
            </ul>
        </div>
    );
}