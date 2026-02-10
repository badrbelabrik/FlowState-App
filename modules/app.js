import {Layout} from "./ui.js"
import {saveTask} from "./todo.js"

const root = document.getElementById("root")
root.innerHTML = Layout();

const body = document.querySelector("body")
body.addEventListener("click", function(event){
    const modal = document.getElementById("modal")
    if(event.target.id === "open-modal" || event.target.parentElement.id === "open-modal"){
        modal.classList.toggle("hidden")
    } else if(event.target.classList.contains("close-modal") || event.target.closest(".close-modal")){
        modal.classList.toggle("hidden")
    } else if(event.target.id === "save-task"){
        saveTask()
    }
})
