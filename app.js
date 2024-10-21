const goalElement = document.getElementById("goal");
const buttonElement = document.getElementById("submit");
const listElement = document.getElementById("list");

function addGoal() {
  const goal = goalElement.value.trim();
  if (goal === "") {
    alert("Enter a goal >:(");
    return;
  }
  const liElement = document.createElement("li");
  liElement.textContent = goal;
  listElement.appendChild(liElement);
}
//Element aus der Liste entfernen
//function removeGoal(event) {
// const liElement = event.target;
//listElement.removeChild(liElement);
//}
function markGoalDone(event) {
  const liElement = event.target;
  liElement.classList.toggle("done");
}
listElement.addEventListener("click", markGoalDone);
// listElement.addEventListener("click", removeGoal);
buttonElement.addEventListener("click", addGoal);
