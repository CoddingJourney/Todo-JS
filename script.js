var tasks = [];
function addTask() {
  var taskInput = document.getElementById("todoInput");
  var taskValue = taskInput.value;

  //Checking if input is empty or not
  if (taskValue.trim() !== "") {
    //add task
    tasks.push({
      text: taskValue,
    });
    taskInput.value = "";
    updateTodo();
  }
}

function updateTodo() {
  var newList = document.getElementById("todoList");
  newList.textContent = ""; // cleraing the existing text
  tasks.forEach((test) => {
    var listedItem = document.createElement("li");
    listedItem.textContent = test.text;
    listedItem.className = test.completed ? "completed" : "";
    listedItem.onclick = function () {
      toggleCompleted(test);
    };

    todoList.appendChild(listedItem);
  });
  updateFuntions();
}
function toggleCompleted(test) {
  test.completed = !test.completed;
  updateTodo();
}

// Function to calculate Todos, Compelet
function updateFuntions() {
  var totalTasks = document.getElementById("totalTasks");
  var completedTasks = document.getElementById("completeTasks");
  var total = tasks.length;
  var done = tasks.reduce((acc, text) => {
    return text.completed ? acc + 1 : acc;
  }, 0);
  totalTasks.textContent = total;
  completedTasks.textContent = done;
}

function filterTask() {
  var searchInput=document.getElementById("searchInput")
  var searchValue=searchInput.value.toLowerCase()
  var filterTasks=tasks.filter((newTask)=>{
    return newTask.text.toLowerCase().includes(searchValue)
  })


  // Update todo with filterTask
updateTask(filterTasks)

}


function updateTask(filterTasks){
  var todoList = document.getElementById("todoList")
  todoList.innerHTML=""


  filterTasks.forEach((test)=>{
    var listedItem = document.createElement("li");
    listedItem.textContent = test.text;
    listedItem.className = test.completed ? "completed" : "";
    listedItem.onclick = function () {
      toggleCompleted(test);
    };

    todoList.appendChild(listedItem);
  })

updateFuntions()

}