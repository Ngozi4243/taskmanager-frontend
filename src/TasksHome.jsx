import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TasksList from "./TasksList";


function TasksHome() {
  const [tasks, setTasks] = useState(null);
  // const [error, setError] = useState(null);

  const navigate = useNavigate();

  const LoadTask = (id) => {
    navigate("/task/detail/" + id);
  };

  const EditTask = (id) => {
    navigate("/task/edit/" + id);
  };

  const DeleteTask = (id) => {
    // navigate("/book/create/" + id);
    if (window.confirm("Do you want to remove?")) {
      const createBook = async () => {
        try {
          const response = await fetch(
            `https://mi-linux.wlv.ac.uk/~2225302/task-manager/public/api/delete/${id}?_method=delete`,
            {
              method: "POST",
            }
          );
          alert("Removed succesfully");
          window.location.reload();
          navigate("/");
        } catch (error) {
          console.log(error);
        }
      };
      createBook();
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await fetch(
        "https://mi-linux.wlv.ac.uk/~2225302/task-manager/public/api/all"
      );
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);


  return (
    <main>
      <TasksList
        tasks={tasks}
        LoadTask={LoadTask}
        EditTask={EditTask}
        DeleteTask={DeleteTask}
      />
    </main>
  );
}

export default TasksHome;