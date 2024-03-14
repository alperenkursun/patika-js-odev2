var todoListData = [];
const todoList = document.getElementById("list");

const showList = () => {
  todoListData.forEach((item, index) => {
    let todoDOM = `<li id="${index}" class="position-relative todo_item ${
      item.isActive ? "todo_item_active" : ""
    }" >
    <i class="fa-solid fa-xmark position-absolute delete_button" onclick="delElement(${index})"></i>
    ${item.todo}
    <i class="fa-solid fa-check text-white position-absolute check_icon ${
      item.isActive ? "" : "d-none"
    }"></i>
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

const newElement = () => {
  taskInput.value = "";
  cleanList();
  let todo = { todo: value, isActive: false };
  todoListData.push(todo);
  showList();
};

const delElement = (index) => {
  cleanList();
  todoListData.splice(index, 1);
  showList();
};
