import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const TaskEdit = () => {
  const [singleTask, setSingleTask] = useState({});

  const getTask = async () => {
    try {
      const response = await fetch(
        `https://mi-linux.wlv.ac.uk/~2225302/task-manager/public/api/view/${taskid}}`
      );
      const singleTask = await response.json();

      setId(singleTask.data.id);
      setTaskName(singleTask.data.task_name);
      setTaskDescription(singleTask.data.task_description);
      setCompleted(singleTask.data.complete);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTask();
  }, []);

  const { taskid } = useParams();

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
          `https://mi-linux.wlv.ac.uk/~2225302/task-manager/public/api/edit/${taskid}?_method=patch`,
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
      <div>
        <h1>Update Book</h1>
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
    </div>
  );
};

export default TaskEdit;