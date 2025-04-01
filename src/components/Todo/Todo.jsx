import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");

    // Agregar tarea
    const addTodo = () => {
        if (task.trim() === "") return;
        setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
        setTask("");
    };

    // Eliminar tarea
    const RemoveTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <div className="todo-input">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add a new task..."
                />
                <button onClick={addTodo}>Add</button>
            </div>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className={todo.completed ? "completed" : ""}>
                        <span>{todo.text}</span>
                        <button onClick={() => RemoveTodo(todo.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;