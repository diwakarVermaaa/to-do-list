function addTask(){
    const newTask = document.createElement('li')
    const tasklist = document.getElementById('tasklist')
    tasklist.appendChild(newTask)
    newTask.textcontext = document.getElementById('inputTask').value
}