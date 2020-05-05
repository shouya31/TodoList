const input = document.getElementById("input-task")
const addTaskButton = document.getElementById("add-button")
const lists = document.getElementById("lists")
const todos = []

// 表示させるタスクのHTML要素を作成する関数
const addHTML = (todo, i) => {
  const tr = document.createElement("tr")
  const tdId = document.createElement("td")
  const tdComment = document.createElement("td")
  const tdStatus = document.createElement("td")
  const tdDelete = document.createElement("td")
  const statusButton = document.createElement("button")
  const deleteButton = document.createElement("button")
  tr.appendChild(tdId)
  tr.appendChild(tdComment)
  tr.appendChild(tdStatus)
  tr.appendChild(tdDelete)
  tdId.innerHTML = i + 1
  tdComment.innerHTML = todo.task
  tdStatus.appendChild(statusButton)
  tdDelete.appendChild(deleteButton)
  deleteButton.setAttribute("id", "delete_btn")
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
  todos.forEach((todo,i) => {
    addHTML(todo, i)
  });
  input.value = ""
}

// 入力したタスクを削除する関数
const deleteTask = () => {
  deleteBtns = document.querySelectorAll("#delete_btn")
  deleteBtns.forEach(btn => {
    btn.addEventListener("click", function(){
      btn.parentNode.parentNode.remove()
      todos.pop(btn.parentNode.parentNode)
      lists.innerHTML = ""
      todos.forEach((todo,i) => {
        addHTML(todo, i)
      });
    })
  })
}

// 入力したタスクを削除するイベント
lists.addEventListener('click', () => {
  const deleteBtns = document.querySelectorAll("#delete_btn")
  deleteBtns.forEach(btn => {
    btn.addEventListener("click", function(){
      const index = [].slice.call(deleteBtns).indexOf(btn)
      btn.parentNode.parentNode.remove()
      todos.splice(index, 1)
      lists.innerHTML = ""
      todos.forEach((todo, i) => {
        addHTML(todo, i)
      });
    })
  })
})

// 入力したタスクを表示する関数を呼び出すイベント
addTaskButton.addEventListener('click', addTask)
