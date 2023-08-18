import React, { useState } from "react";

function Todo({task, id, remove, update}) {
  let [editTask, setEditTask] = useState(task);
  let [isEditing, setIsEditing] = useState(false);
  let toggleEdit = () => {
    setIsEditing(edit => !edit)
  };

  let handleChange = (e) => {
    setEditTask(e.target.value)
  };

  let handleDelete = () => remove(id);

  let handleUpdate = (e) => {
    e.preventDefault();
    update(id, editTask);
    setIsEditing(false);
  };

  let jsx = (
    <div>
      <li>{task}</li>
      <button onClick={toggleEdit}>Edit Task</button>
      <button onClick={handleDelete}>X</button>
    </div>
  );

  if(isEditing){
    jsx= (
        <div>
            <form onSubmit={handleUpdate}>
                <input type="text" value={editTask} onChange={handleChange}></input>
                <button>Update</button>
            </form>
        </div>
    )
  }

  return jsx;
}

export default Todo;
