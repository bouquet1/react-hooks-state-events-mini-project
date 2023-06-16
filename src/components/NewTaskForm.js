import React from "react";

function NewTaskForm({ categories }) {
  const [newTask, setNewTask] = useState("");
  const [newCategory, setNewCategory] = useState("Code");

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
          {categories.map((category) => (category === "All" ? null : <option key={category} value={category} />))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
