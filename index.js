const input = document.getElementById("input-task")
const addTaskButton = document.getElementById("add-button")
const lists = document.getElementById("lists")
const todos = []

// 表示させるタスクのHTML要素を作成する関数
const addHTML = (todo, i) => {
  const html =`
          <p>${i}　${todo.task}</p>
          <td><button>${todo.status}</button></td>
          <td><button>削除</button></td>
        `
  const tr = document.createElement("tr")
  tr.innerHTML = html
  lists.append(tr)
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
