import React, {useState} from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
    let [todos, setTodos] = useState([]);

    let add = newTodo => {
        setTodos(todos => [...todos, newTodo])
    }

    let update = (id, updatedTask) => {
        setTodos(todos => todos.map(todo => todo.id === id ? {...todo, task: updatedTask} : todo))
    }

    let remove = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }

    let todoComps = todos.map(todo => (
        <Todo
        remove={remove}
        key={todo.id}
        id={todo.id}
        task={todo.task}
        update={update}
        />
    ))

    return (
        <div>
            <NewTodoForm addTodo={add}/>
            <ul>{todoComps}</ul>
        </div>
    )
}

export default TodoList;