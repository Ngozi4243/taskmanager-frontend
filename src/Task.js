import React from "react";

const Task = ({
  id,
  task_name,
  task_description,
  completed,
  LoadTask,
  DeleteTask,
  EditTask,
}) => {
  return (
    <article>
      <img src="" alt="" />
      <ul>
        <li key={id}>
          <h2>{task_name}</h2>
          <p>{task_description}</p>
          <p>{completed}</p>
        </li>
      </ul>
      <button
        type="button"
        onClick={() => {
          EditTask(id);
        }}
      >
        Edit
      </button>
      <button
        type="button"
        onClick={() => {
          DeleteTask(id);
        }}
      >
        Delete
      </button>
      <button
        type="button"
        onClick={() => {
          LoadTask(id);
        }}
      >
        Detail
      </button>
    </article>
  );
};

export default Task;