import React from "react";
import Task from "./Task";
import { v4 as uuidv4 } from "uuid";

function TaskList({ tasks, handleClick }) {
  // const taskList = tasks.map((task) => (
  //   <Task key={uuidv4()} text={task.text} category={task.category} handleClick={handleClick} />
  // ));

  return (
    <div className="tasks">
      {/* {taskList}       */}
      {tasks.map((task) => (
        <Task key={uuidv4} category={task.category} text={task.text} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default TaskList;
