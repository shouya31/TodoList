const input = document.getElementById("input-task")
const addTaskButton = document.getElementById("add-button")
const lists = document.getElementById("lists")
const todos = []

// 表示させるタスクのHTML要素を作成する関数
const addHTML = (todo, i) => {
  const tr = document.createElement("tr")
  const td_id = document.createElement("td")
  const td_comment = document.createElement("td")
  const td_status = document.createElement("td")
  const td_delete = document.createElement("td")
  const statusButton = document.createElement("button")
  const deleteButton = document.createElement("button")
  tr.appendChild(td_id)
  tr.appendChild(td_comment)
  tr.appendChild(td_status)
  tr.appendChild(td_delete)
  td_id.innerHTML = i + 1
  td_comment.innerHTML = todo.task
  td_status.appendChild(statusButton)
  td_delete.appendChild(deleteButton)
  statusButton.innerHTML = todo.status
  deleteButton.innerHTML = "削除"
  lists.appendChild(tr)
}

// 入力したタスクを表示させる関数
const addTask = () => {
  const inputValue = input.value
  const todo = {
    task: inputValue,
    status: "作業中"
  }
  todos.push(todo)
  lists.innerHTML = ""
  todos.forEach((todo, i) => {
    addHTML(todo, i)
  });
  input.value = ""
}

addTaskButton.addEventListener('click', addTask)
