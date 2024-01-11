// Get references to DOM elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add a task to the list
function addTask() {
  // Check if the input field is empty
  if (inputBox.value === "") {
    alert("Você deve digitar uma tarefa!");
  } else {
    // Create a new list element (li) and append it to the list
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // Add a removal button to the task
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  // Clear the input field after adding the task
  inputBox.value = "";

  // Save data to local storage
  saveData();
}

// Add click events to mark tasks as completed or remove them
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      // Toggle the 'checked' class to mark/unmark the task as completed
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      // Remove the parent element (li) when the removal button (span) is clicked
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// Save the list to local storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Display the stored list on page load
function showList() {
  listContainer.innerHTML = localStorage.getItem("data");
}

// Load the list on application startup
showList();
