import { BrowserRouter, Route, Routes } from "react-router-dom";
import TasksHome from "./TasksHome";
import TaskAdd from "./TaskAdd";
import TaskEdit from "./TaskEdit";
import TaskDetail from "./TaskDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TasksHome />}></Route>
        <Route path="/task/add" element={<TaskAdd />}></Route>
        <Route path="/task/edit/:taskid" element={<TaskEdit />}></Route>
        <Route path="/task/detail/:taskid" element={<TaskDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;