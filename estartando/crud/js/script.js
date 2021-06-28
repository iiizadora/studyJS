document.querySelector('#form').addEventListener('submit',event=>{
  event.preventDefault();
  saveTask();
})

function saveTask(){
  const name = document.querySelector('#name').value;
  const task = {
    name,
    done:false,
  };
  addTaskStorage(task)
}

// converte um dado para string antes de gravar
function addTaskStorage(task){
  const taskString =JSON.stringify(task)
  const tasks = getTaskStorage();
  const taskWithNewItem = [...tasks,task]
  localStorage.setItem('list',taskString)

}

function getTaskStorage(){
  const tasksStrings = localStorage.getItem('list')
  const tasks = JSON.parse(tasksStrings)
  return tasks
}