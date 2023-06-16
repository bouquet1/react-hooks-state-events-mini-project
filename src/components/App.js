import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [taskData, setTaskData] = useState(TASKS);

  function onTaskFormSubmit(newTask) {
    setTaskData([...taskData, newTask]);
  }

  function handleClick(text) {
    setTaskData((taskData) => taskData.filter((task) => (task.text === text ? false : true)));
  }

  const tasksToDisplay = taskData.filter((task) => {
    return selectedCategory === "All" ? true : selectedCategory === task.category;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={TASKS} handleClick={handleClick} />
    </div>
  );
}

export default App;
