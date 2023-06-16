import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTask, setNewTask] = useState("");
  const [newCategory, setNewCategory] = useState("Code");

  function handleSubmit(e) {
    e.preventDefault();
    const inputTask = { text: newTask, category: newCategory };
    onTaskFormSubmit(inputTask);
  }

  return (
    <form className="new-task-form" onSubmit={(e) => handleSubmit(e)}>
      <label>
        Details
        <input type="text" name="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
          {categories.map((category) =>
            category === "All" ? null : (
              <option key={category} value={category}>
                {category}
              </option>
            )
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
