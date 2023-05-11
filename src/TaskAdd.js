import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TaskAdd = () => {
  const [id, setId] = useState("");
  const [task_name, setTaskName] = useState("");
  const [task_description, setTaskDescription] = useState("");
  const [completed, setCompleted] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = { task_name, task_description, completed};

    const createTask = async () => {
      try {
        const response = await fetch(
          "https://mi-linux.wlv.ac.uk/~2225302/task-manager/public/api/create",
          {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(task),
          }
        );
        alert("Saved succesfully");
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };
    createTask();
  };

  return (
    <div>
      <h1>Create New Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="formgroup">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            id="id"
            disabled="disabled"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div className="formgroup">
          <label htmlFor="task_name">Task Name</label>
          <input
            type="text"
            id="task_name"
            value={task_name}
            placeholder="Task Name"
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>

        <div className="formgroup">
          <label htmlFor="task_description">Task Description</label>
          <input
            type="text"
            id="task_description"
            value={task_description}
            placeholder="Task Description"
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </div>

        <div className="formgroup">
          <label htmlFor="completed">Completed</label>
          <input
            type="text"
            id="completed"
            value={completed}
            placeholder="Task Completed"
            onChange={(e) => setCompleted(e.target.value)}
          />
        </div>

        <div className="formgroup">
          <button type="submit">Save Task</button>
          <Link to="/">Back to Task List</Link>
        </div>
      </form>
    </div>
  );
};

export default TaskAdd;