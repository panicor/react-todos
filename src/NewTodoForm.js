import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTodoForm({ addTodo }) {
  let [task, setTask] = useState("");

  let handleChange = (e) => {
    setTask(e.target.value);
  };

  let getInput = (e) => {
    e.preventDefault();

    addTodo({ task, id: uuid() });

    setTask("");
  };

  return (
    <div>
      <form onSubmit={getInput}>
        <label htmlFor="task">Task:</label>
        <input
        id="task"
        name="task"
        type="text"
        onChange={handleChange}
        value={task}></input>
        <button>Add todo</button>
      </form>
    </div>
  );
}

export default NewTodoForm;
