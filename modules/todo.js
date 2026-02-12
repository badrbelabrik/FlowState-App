import {getTasks,setTasks } from "./storage.js"

export function saveTask(data){
    const tasks = getTasks()
    
   let newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
   const newTask = {id:newId,name:data.name,logo:data.logo,duration:data.duration,sessions:data.sessions,date:data.date,isActive:false,terminated:false} 
   tasks.push(newTask)
   setTasks(tasks) 
}

export function editTask(id){
    const tasks = getTasks()
    const currentTask = tasks.find(item => item.id == id)
    document.getElementById("edit-name").value = currentTask.name
    document.getElementById("edit-duration").value = currentTask.duration
    document.getElementById("edit-sessions").value = currentTask.sessions
    document.getElementById("edit-logo").value = currentTask.logo
    document.getElementById("edit-date").value = currentTask.date


    
}