import { MainLayout, TimerLayout } from "./ui.js"
import { saveTask, displayEditTask, saveEditedTask, deleteTask } from "./todo.js"
import { getTasks } from "./storage.js";
import { initTimer,StartTimer,PauseTimer,ResetTimer } from "./timer.js";

const root = document.getElementById("root")
function render() {
    const tasks = getTasks()
    const hash = location.hash || "#main";
    if (hash.startsWith("#timer")) {
        const params = new URLSearchParams(hash.split("?")[1] || "");
        const taskId = Number(params.get("taskId"));

        const task = tasks.find(t => t.id === taskId);

        root.innerHTML = TimerLayout(task);// TimerLayout should handle task=null too
        initTimer(task) 
        return;
    }

    root.innerHTML = MainLayout(tasks);
    
}
render()
window.addEventListener("hashchange", render);


root.addEventListener("click", function (event) {
    const modal = document.getElementById("modal")
    const editmodal = document.getElementById("edit-modal")
    const deletemodal = document.getElementById("delete-modal")
    const el = event.target
    if (el.closest(".play-button")) {
        const id = el.closest(".card-div").dataset.id
        location.hash = `#timer?taskId=${id}`
    } if (el.closest(".go-timer")) {
        location.hash = "#timer"
        return
    }
    if (el.closest(".go-main")) {
        location.hash = "#main"
    }
    if (el.closest(".open-modal")) {
        modal.classList.remove("hidden")
        return
    } else if (el.closest(".close-modal")) {
        modal.classList.add("hidden")
        editmodal.classList.add("hidden")
        deletemodal.classList.add("hidden")
        return
    } if (el.id === ("modal") || el.id === "save-task" || el.id === ("edit-modal") || el.id === ("delete-modal")) {
        modal.classList.add("hidden")
        editmodal.classList.add("hidden")
        deletemodal.classList.add("hidden")
        return
    } if (el.closest(".edit")) {
        const id = el.closest(".card-div").dataset.id
        document.getElementById("edit-task-form").dataset.id = id
        displayEditTask(id)
        editmodal.classList.remove("hidden")
    } if (el.closest(".delete")) {
        deletemodal.classList.remove("hidden")
        deletemodal.dataset.id = el.closest(".card-div").dataset.id
    } if (el.id === ("delete-task-button") || el.closest("#delete-task-button")) {
        const id = deletemodal.dataset.id
        deleteTask(id)
        deletemodal.classList.add("hidden")
        render()
    }
    if(el.id === ("btn-start-timer")){
        StartTimer()
    }
    if(el.closest("#btn-pause-timer")){
        PauseTimer()
    }
    if(el.closest("#btn-reset-timer")){
        ResetTimer()
    }
    const menuBtn = el.closest(".task-menu")
    // Close all menus
    root.querySelectorAll(".drop-menu")
        .forEach(item => item.classList.add("hidden"))

    if (menuBtn) {
        const wrapper = menuBtn.closest(".relative")
        const menu = wrapper?.querySelector(".drop-menu")
        menu?.classList.remove("hidden")
    }
})


root.addEventListener("submit", function (event) {
    event.preventDefault()
    const form = event.target
    if (form.id === "save-task-form") {
        const data = {
            name: form.querySelector("#task-name").value,
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
    else if (form.id === "edit-task-form") {
        const id = form.dataset.id
        saveEditedTask(id)
        document.getElementById("modal").classList.add("hidden")
        render()
    }

})
