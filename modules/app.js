import {Layout} from "./ui.js"
import {saveTask,displayEditTask, saveEditedTask} from "./todo.js"
import { getTasks } from "./storage.js";

const root = document.getElementById("root")

function render(){
    const tasks = getTasks()
    root.innerHTML = Layout(tasks);
}

render()

root.addEventListener("click", function(event){
    const modal = document.getElementById("modal")
    const editmodal = document.getElementById("edit-modal")
    const el = event.target
    if(el.closest(".open-modal")){
        modal.classList.remove("hidden")
        return
    } else if(el.closest(".close-modal")){
        modal.classList.add("hidden")
        editmodal.classList.add("hidden")
        return
    } if(el.id === ("modal") || el.id === "save-task"){
        modal.classList.add("hidden")
        return
    } if(el.closest(".edit")){
        const id = el.closest(".card-div").dataset.id
        document.getElementById("edit-task-form").dataset.id = id
        displayEditTask(id)
        editmodal.classList.remove("hidden")
    } else if(el.closest(".close-modal")){

    }
    const menuBtn = el.closest(".task-menu")
    if(!menuBtn){
        root.querySelectorAll(".drop-menu").forEach(item => item.classList.add("hidden"))
        return
    }
    root.querySelectorAll(".drop-menu").forEach(item => item.classList.add("hidden"))
    const wrapper = menuBtn.closest(".relative")
    const menu = wrapper.querySelector(".drop-menu")
    menu.classList.toggle("hidden")


})


root.addEventListener("submit", function(event){
    event.preventDefault()
    const form = event.target
    if(form.id === "save-task-form"){
            const data = {name : form.querySelector("#task-name").value,
                    duration: Number(form.querySelector("#task-duration").value),
                    sessions: Number(form.querySelector("#task-sessions").value),
                    logo: form.querySelector("#task-logo").value,
                    date: form.querySelector("#task-date").value
    }
            saveTask(data)
            form.reset()
            document.getElementById("modal").classList.add("hidden")
            render()
    }
    else if(form.id === "edit-task-form"){
            const id = form.dataset.id
            saveEditedTask(id)
            document.getElementById("modal").classList.add("hidden")
            render()
    }

})
