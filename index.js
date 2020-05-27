const input = document.getElementById('input-task')
const addTaskButton = document.getElementById('add-button')
const lists = document.getElementById('lists')
const todos = []

const allRadio = document.getElementById('all-task')
const doingRadio = document.getElementById('doing-task')
const doneRadio = document.getElementById('done-task')
let radioStatus = 'all'

// 表示させるタスクのHTML要素を作成する関数
const addHTML = (todo, i) => {
  // 使用するHTML要素を生成する
  const tr = document.createElement('tr')
  const tdId = document.createElement('td')
  const tdComment = document.createElement('td')
  const tdStatus = document.createElement('td')
  const tdDelete = document.createElement('td')
  const statusButton = document.createElement('button')
  const deleteButton = document.createElement('button')

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
  deleteButton.innerHTML = '削除'

  // 削除ボタンが押された際に、指定の要素を削除するdeleteTask関数を実行する
  deleteButton.addEventListener('click', function() {
    deleteTask(deleteButton, i)
  })

  // 作業中orm完了ボタンを押した際に、ステータスを変更するchangeTasks関数を実行する
  statusButton.addEventListener('click', function(){
    changeTasks(statusButton, todo)
  })
}

// 作業中or完了のタスクを表示する
const showEachTask = (status) => {
  lists.innerHTML = ''
  todos.forEach((todo, i) => {
    if (todo.status === status) {
      addHTML(todo, i)
    }
  })
}

// 作業中のステータスをもつタスクのみを表示する関数
const changeDoingTask = (event) => {
  radioStatus = event.target.value
  showEachTask('作業中')
}

// 完了のステータスをもつタスクのみを表示する関数
const changeDoneTask = (event) => {
  radioStatus = event.target.value
  showEachTask('完了')
}

// ステータス関係なく、全てのタスクを表示する関数
const changeAllTask = (event) => {
  radioStatus = event.target.value
  lists.innerHTML = ''
  todos.forEach((todo, i) => {
    addHTML(todo, i)
  })
}

// 入力したタスクを表示させる関数
const addTask = () => {
  const inputValue = input.value
  const todo = {
    task: inputValue,
    status: '作業中'
  }
  todos.push(todo)
  if (radioStatus === 'all') {
    lists.innerHTML = ''
    todos.forEach((todo,i) => {
      addHTML(todo, i)
    });
  }
  else if ( radioStatus === 'doing'){
    showEachTask('作業中')
  }
  input.value = ''
}

// 入力したタスクを削除する関数
const deleteTask = (deleteButton, i) => {
  deleteButton.parentNode.parentNode.remove()
  todos.splice(i, 1)
  lists.innerHTML = ''
  todos.forEach((todo, i) => {
    addHTML(todo, i)
  });
}

// タスクのステータスを変更する
const changeStatus = (todo, statusButton, status) => {
  todo.status = status
  statusButton.innerHTML = todo.status
}

// タスクのステータスに応じて、タスクを表示させる
const changeTasks = (statusButton, todo) => {
  if (todo.status === '作業中' && radioStatus ===  'all') {
    changeStatus(todo, statusButton, '完了')
  }
  else if(todo.status === '作業中' && radioStatus !==  'all'){
    changeStatus(todo, statusButton, '完了')
    showEachTask('作業中')
  }
  else if(todo.status === '完了' && radioStatus ===  'all'){
    changeStatus(todo, statusButton, "作業中")
  }
  else if(todo.status === '完了' && radioStatus !==  'all'){
    changeStatus(todo, statusButton, "作業中")
    showEachTask('完了')
  }
}

// 入力したタスクを表示する関数を呼び出すイベント
addTaskButton.addEventListener('click', addTask)
allRadio.addEventListener('change', (event) => {
  changeAllTask(event)
})
doingRadio.addEventListener('change', (event) => {
  changeDoingTask(event)
})
doneRadio.addEventListener('change', (event) => {
  changeDoneTask(event)
})