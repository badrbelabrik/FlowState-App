import {Layout} from "./ui.js"
import {saveTask} from "./todo.js"

const root = document.getElementById("root")
root.innerHTML = Layout();

root.addEventListener("click", function(event){
    const modal = document.getElementById("modal")
    const el = event.target
    if(el.closest(".open-modal")){
        modal.classList.remove("hidden")
        return
    } else if(el.closest(".close-modal")){
        modal.classList.add("hidden")
        return
    } if(el.id === ("modal") || el.id === "save-task"){
        modal.classList.add("hidden")
    } 
})


root.addEventListener("submit", function(event){
    event.preventDefault()
    const form = event.target
    const data = {name : form.querySelector("#task-name").value,
                    duration: Number(form.querySelector("#task-duration").value),
                    sessions: Number(form.querySelector("#task-sessions").value),
                    logo: form.querySelector("#task-logo").value,
                    date: form.querySelector("#task-date").value
    }

saveTask(data)
form.reset()
document.getElementById("modal").classList.add("hidden")
})
