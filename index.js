const input = document.getElementById("input-task")
const addTaskButton = document.getElementById("add-button")
const lists = document.getElementById("lists")
const todos = []

// 表示させるタスクのHTML要素を作成する関数
const addHTML = (todo, i) => {
  // 使用するHTML要素を生成する
  const tr = document.createElement("tr")
  const tdId = document.createElement("td")
  const tdComment = document.createElement("td")
  const tdStatus = document.createElement("td")
  const tdDelete = document.createElement("td")
  const statusButton = document.createElement("button")
  const deleteButton = document.createElement("button")

  // tr要素を親要素とし、生成した要素らをappendする
  tr.appendChild(tdId)
  tr.appendChild(tdComment)
  tr.appendChild(tdStatus)
  tr.appendChild(tdDelete)
  tdStatus.appendChild(statusButton)
  tdDelete.appendChild(deleteButton)

  // tr要素をthred要素にappendする
  lists.appendChild(tr)

  // appendした要素に文字列の値を付与する
  tdId.innerHTML = i + 1
  tdComment.innerHTML = todo.task
  statusButton.innerHTML = todo.status
  deleteButton.innerHTML = "削除"

  // 削除ボタンが押された際に、指定の要素を削除するdeleteTask関数を実行する
  deleteButton.addEventListener("click", function() {
    deleteTask(deleteButton, i)
  })

  // 作業中orm完了ボタンを押した際に、ステータスを変更するchangeStatus関数を実行する
  statusButton.addEventListener('click', function(){
    changeStatus(statusButton, todo)
  })
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
const deleteTask = (deleteButton, i) => {
  deleteButton.parentNode.parentNode.remove()
    todos.splice(i, 1)
    lists.innerHTML = ""
    todos.forEach((todo, i) => {
      addHTML(todo, i)
  });
}

// タスクのステータスを変更する
const changeStatus = (statusButton, todo) => {
  if (todo.status === "作業中") {
    todo.status = "完了"
    statusButton.innerHTML = todo.status
  }else{
    todo.status = "作業中"
    statusButton.innerHTML = todo.status
  }
}

// 入力したタスクを表示する関数を呼び出すイベント
addTaskButton.addEventListener('click', addTask)
