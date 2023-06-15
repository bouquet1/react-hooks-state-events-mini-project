import React from "react";
import Task from "./Task";
import { v4 as uuidv4 } from "uuid";

function TaskList({ tasks }) {
  const taskList = tasks.map((task) => <Task key={uuidv4()} text={task.text} category={task.category} />);

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <h3>Task List</h3>
      <ul>{taskList}</ul>
    </div>
  );
}

// function TaskList({ tasks }) {
//   return (
//     <div className="tasks">
//       {/* display a list of tasks using Task component */}
//       <Task tasks={tasks} />
//     </div>
//   );
// }

export default TaskList;
