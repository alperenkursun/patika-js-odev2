var x = localStorage.getItem("todoListData")
  ? localStorage.getItem("todoListData")
  : [];
var todoListData = JSON.parse(x);
const todoList = document.getElementById("list");

const showList = () => {
  todoListData.forEach((item, index) => {
    let todoDOM = `<li id="${index}" class="position-relative todo_item ${
      item.isActive ? "todo_item_active" : ""
    }" >
    <i class="fa-solid fa-xmark position-absolute delete_button" onclick="delElement(${index})"></i>
    ${item.todo}
    <i class="fa-solid fa-check text-white position-absolute check_icon ${
      item.isActive ? "text-white" : "text-secondary"
    }" onclick="cheElement(${index})"></i>
    </li>`;
    todoList.insertAdjacentHTML("beforeend", todoDOM);
  });
};

const cleanList = () => {
  todoList.innerHTML = "";
};

showList();

var value;
const taskInput = document.getElementById("task");
const handleValue = () => {
  value = taskInput.value;
};

const toastButton = document.getElementById("toastButton");

const newElement = () => {
  if (taskInput.value.trim() == "") {
    let toast = document.getElementById("liveToast2");
    let bsToast = new bootstrap.Toast(toast);
    bsToast.show();
  } else {
    let toast = document.getElementById("liveToast1");
    let bsToast = new bootstrap.Toast(toast);
    bsToast.show();
    cleanList();
    let todo = { todo: value, isActive: false };
    todoListData.push(todo);
    localStorage.setItem("todoListData", JSON.stringify(todoListData));
    showList();
  }
  taskInput.value = "";
};

const delElement = (index) => {
  cleanList();
  todoListData.splice(index, 1);
  localStorage.setItem("todoListData", JSON.stringify(todoListData));
  showList();
};

const cheElement = (index) => {
  cleanList();
  if (todoListData[index].isActive == true) {
    todoListData[index].isActive = false;
  } else if (todoListData[index].isActive == false) {
    todoListData[index].isActive = true;
  }
  localStorage.setItem("todoListData", JSON.stringify(todoListData));
  showList();
};
