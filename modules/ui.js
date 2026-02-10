import { getTasks} from "./storage.js"

function Header() {
    return `<div id="top-bar" class="flex justify-between gap-4 m-4">
        <div class="flex gap-2">
            <div class="w-16 h-16 rounded-full bg-[url('images/blog-1.jpg')] bg-cover bg-center"></div>
            <div class="self-center">
                <h2 class="font-bold">Hello BADR !!</h2>
                <span>Be productive today</span>
            </div>
        </div>
        <i class="fa-solid fa-bell self-center text-[#0F2854]"></i>    
    </div>`
}

function currentTask() {
    return `<div id="current-task" class="flex flex-col justify-center items-center gap-2 my-4">
        <h2 class="self-start font-bold">Current task</h2>
        <div class="flex gap-2 justify-between items-center h-24 w-full bg-[#1C4D8D] rounded-xl px-4">
            <img src="images/jslogo.png" alt="task logo" class="h-16">
            <div>
                <h2 class="font-bold">Learning javascript</h2>
                <p>50 mins</p>
            </div>
            <div class="flex justify-center items-center h-8 w-8 rounded-full bg-[#4988C4]">
                <i class="fa-solid fa-pause text-white"></i>
            </div>
        </div>
    </div>`
}

function dailyGoal() {
    return `<div id="daily-goal" class="flex flex-col justify-center items-center gap-2 my-4">
        <h2 class="self-start font-bold">Daily goal</h2>
        <div class="flex gap-2 justify-between items-center h-24 w-full bg-[#4988C4] rounded-xl px-4">
            <img src="images/progress.png" alt="" class="h-16">
            <div class="flex flex-col gap-2">
                <h2 class="font-bold">Your daily goals almost done</h2>
                <p class="text-center">5 of 8 completed</p>
            </div>
        </div>
    </div>`
}
function listTasks() {
    const tasks = getTasks()
    const taskslist = []
    for (const task of tasks) {
        const taskDiv = `<div  class="flex gap-2 justify-between items-center h-16 w-full bg-[#BDE8F5] rounded-xl px-4">
        <img src="${task.logo}" alt="task logo" class="h-16">        
        <div class="flex flex-col gap-2">
                    <h2 class="font-bold">${task.name}</h2>
                    <span>${task.sessions} session(s)</span>
                </div>
                <div class="flex justify-center items-center h-8 w-8 rounded-full bg-[#4988C4]">
                <i class="fa-solid fa-pause text-white"></i>
            </div>
            </div>`
        taskslist.push(taskDiv)
    }
    return taskslist.join("")
}

function todayTasks() {
    return `<div id="today-tasks" class="flex flex-col justify-center items-center gap-2 my-4">
                <h2 class="self-start font-bold">Today's goals</h2>
                <div class="flex flex-col justify-center items-center gap-4 w-full">
                    ${listTasks()}
                </div>
            </div>`
}

function Navbar() {
    return `<nav class="flex gap-6 h-16 px-4 justify-between items-center shadow-[0_-6px_12px_rgba(0,0,0,0.15)]  rounded-xl bg-white sticky bottom-0 md:hidden">
        <a href="main-page.html"><i class="fa-solid fa-house text-[#0F2854] text-3xl "></i></a>
        <a href=""><i class="fa-solid fa-circle-plus text-[#0F2854] text-3xl"></i></a>
        <a href=""><i class="fa-solid fa-stopwatch text-[#0F2854] text-3xl"></i></a>
        <a href="profile.html"><i class="fa-solid fa-user text-[#0F2854] text-3xl"></i></a>
</nav>`
}

export function Layout() {
    return `${Header()}
        <main class="m-4">
        ${currentTask()}
        ${dailyGoal()}
        ${todayTasks()}
        </main>
            ${Navbar()}
    `
}
