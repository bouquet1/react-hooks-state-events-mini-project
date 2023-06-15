import React, { useState } from "react";

function Task({ id, text, category }) {
  const [taskList, setTaskList] = useState(text, category);
  //console.log(taskList);

  function handleDelete() {
    console.log();
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Task;
