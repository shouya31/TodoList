const input = document.getElementById("input-task")
const addTaskButton = document.getElementById("adding-task")
const lists = document.getElementById("lists")
const array = []

const addHTML = (task, i) => {
  html =`
          ${i} ${task}
          <td><button>作業中</button></td>
          <td><button>削除</button></td>
        `
  const ele = document.createElement("tr")
  ele.innerHTML = html
  lists.append(ele)
}

const showTask = () => {
  inputValue = input.value
  array.push(inputValue)
  lists.innerHTML = ""
  array.forEach((task,index) => {
    addHTML(task, index)
  });
  input.value = ""
}

addTaskButton.addEventListener('click', showTask)
