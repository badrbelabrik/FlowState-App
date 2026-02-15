import {getTasks,setTasks } from "./storage.js"
import { ShowMessage } from "./app.js";

export function saveTask(data){
    const name = data.name.trim();
    const regex = /^[\p{L}0-9 _-]{2,50}$/u;

    if (!regex.test(name)) {
        ShowMessage("Invalid task name ❌", 3000, "bg-red-600");
        return;
    }
   const tasks = getTasks()
   let newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
   const newTask = {id:newId,name:data.name,logo:data.logo,duration:data.duration,sessions:data.sessions,date:data.date,isActive:false,terminated:false} 
   tasks.push(newTask)
   setTasks(tasks) 
    ShowMessage("Task added successfully !", 4000 , "bg-emerald-700")
}

export function displayEditTask(id){
    const tasks = getTasks()
    const currentTask = tasks.find(item => item.id == id)
    document.getElementById("edit-name").value = currentTask.name
    document.getElementById("edit-duration").value = currentTask.duration
    document.getElementById("edit-sessions").value = currentTask.sessions
    document.getElementById("edit-logo").value = currentTask.logo
    document.getElementById("edit-date").value = currentTask.date    
}

export function saveEditedTask(id){
    const tasks = getTasks()
    const currentTask = tasks.find(item => item.id == id)
    currentTask.name = document.getElementById("edit-name").value
    currentTask.duration = document.getElementById("edit-duration").value
    currentTask.sessions = document.getElementById("edit-sessions").value
    currentTask.logo = document.getElementById("edit-logo").value
    currentTask.date = document.getElementById("edit-date").value
    setTasks(tasks)
    ShowMessage("Task edited successfully !", 4000 , "bg-cyan-300")
}

export function deleteTask(id){
    const tasks = getTasks()
    const index = tasks.findIndex(item => item.id == id)
    tasks.splice(index,1)
    setTasks(tasks)
    ShowMessage("Task deleted !", 4000 , "bg-red-600")
}