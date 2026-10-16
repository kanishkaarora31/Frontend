// app.ts
import { addTask, filterByStatus } from "./model.js";

let tasks = [];
let filter = "all";

// Grab elements
const titleInput = document.getElementById("title");
const addBtn = document.getElementById("add");
const listEl = document.getElementById("list");

function render() {
  const visibleTasks = filter === "all" ? tasks : filterByStatus(tasks, filter);
  listEl.innerHTML = "";

  visibleTasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = `${task.title} (${task.status})`;
    listEl.appendChild(li);
  });
}

addBtn.onclick = () => {
  const title = titleInput.value.trim();   // .value is known & typed
  if (!title) return;
  tasks = addTask(tasks, title);           // returns a fresh Task[]
  render();
};

render();