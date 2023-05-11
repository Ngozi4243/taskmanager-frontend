import { Link } from "react-router-dom";
import Task from "./Task";

const TasksList = ({ tasks, LoadTask, DeleteTask, EditTask }) => {
  return (
    <div>
      <Link to="task/add">Create New Task</Link>
      {tasks?.values?.map((task) => {
        return (
          <Task
            key={task.id}
            {...task}
             LoadTask={LoadTask}
             EditTask={EditTask}
            DeleteTask={DeleteTask}
          />
        );
      })}
    </div>
  );
};

export default TasksList;