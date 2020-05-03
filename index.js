const input = document.getElementById("input-task")
const addTaskButton = document.getElementById("add-button")
const lists = document.getElementById("lists")
const todos = []

// 表示させるタスクのHTML要素を作成する関数
const addHTML = (todo, i) => {
  const tr = document.createElement("tr")
  const td1 = document.createElement("td")
  const td2 = document.createElement("td")
  const button1 = document.createElement("button")
  const button2 = document.createElement("button")
  const p = document.createElement("p")
  tr.appendChild(p)
  tr.appendChild(td1)
  tr.appendChild(td2)
  td1.appendChild(button1)
  td2.appendChild(button2)
  p.innerHTML = `${i}　${todo.task}`
  button1.innerHTML = `${todo.status}`
  button2.innerHTML = "削除"
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
