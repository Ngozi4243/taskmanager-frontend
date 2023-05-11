import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const TaskDetail = () => {
  const { taskid} = useParams();

  const [singleTask, setSingleTask] = useState({});

  const fetchTask = async () => {
    try {
      const response = await fetch(
        `https://mi-linux.wlv.ac.uk/~2225302/task-manager/public/api/view/${taskid}`
      );
      const singleTask = await response.json();
      setSingleTask(singleTask);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(singleTask)

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <div>
      <h1>Task Detail</h1>

      {singleTask.data && (
        <div>
          <h2>{singleTask.data.task_name}</h2>
          <h4>{singleTask.data.task_description}</h4>
          <h4>{singleTask.data.completed}</h4>
        </div>
      )}

      <Link to="/">Back to listing</Link>
    </div>
  );
};

export default TaskDetail;