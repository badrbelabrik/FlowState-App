import { getTasks,setTasks } from "./storage.js"

export function saveTask(){
    const modal = document.getElementById("modal")
    const tasks = getTasks()

    
   const name = document.getElementById("task-name")
   const duration = document.getElementById("task-duration")
   const sessions = document.getElementById("task-sessions")
   const date = document.getElementById("task-date")
    
   let newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
   const newTask = {id:newId,name:name.value,duration:duration.value,sessions:sessions.value,date:date.value,isActive:false,terminated:false} 
   tasks.push(newTask)
   setTasks(tasks)
   name.value = ""
   duration.value = "25"
   sessions.value = "1"
   date.value = ""
   modal.classList.toggle("hidden")
}