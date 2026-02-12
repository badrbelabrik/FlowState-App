
function Header() {
    return `<div id="top-bar" class="flex justify-between gap-4 m-4">
        <div class="flex gap-2">
            <div class="w-16 h-16 rounded-full bg-[url('images/blog-1.jpg')] bg-cover bg-center"></div>
            <div class="self-center">
                <h2 class="font-bold">Hello BADR !!</h2>
                <span>Be productive today</span>
            </div>
        </div>
        <i class="fa-solid fa-bell self-center text-gray-800"></i>    
    </div>`
}

function CurrentTask() {
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

function DailyGoal() {
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
function ListTasks(tasks) {
    const taskslist = []
    if (tasks.length > 0) {
        for (const task of tasks) {
            const taskDiv = `<div  class="card-div flex gap-2 justify-between items-center h-16 w-full bg-[#BDE8F5] rounded-xl px-4" data-id="${task.id}">
        <img src="${task.logo}" alt="task logo" class="h-12">        
        <div class="flex flex-col gap-2 text-center">
                    <h2 class="font-bold">${task.name}</h2>
                    <span>${task.sessions} session(s)</span>
                </div>
                <div class="relative flex gap-2 items-center">               
                        <div class="flex justify-center items-center h-8 w-8 rounded-full bg-[#4988C4]">
                            <i class="fa-solid fa-pause text-white"></i>
                         </div>
                        <button class="task-menu rounded-full size-5 cursor-pointer"> ⋮ </button>
                        <div class="drop-menu hidden absolute right-5 bottom-0 mb-2 md:bottom-auto md:top-full md:mt-2 md:mb-0 w-28 bg-white rounded-lg shadow-lg z-50">
                            <button class="edit block w-full text-left px-3 py-2 rounded-t-lg hover:bg-gray-100">Edit</button>
                            <button class="delete block w-full text-left px-3 py-2 rounded-b-lg hover:bg-gray-100 text-red-500">Delete</button>
                        </div>
                </div>

            </div>`
            taskslist.push(taskDiv)
        }
    } else {
        taskslist.push(`
  <div class="w-full text-center text-gray-500">
    No tasks scheduled today
  </div>
`)
    }

    return taskslist.join("")
}

function TodayTasks(tasks) {
    return `<div id="today-tasks" class="flex flex-col justify-center items-center gap-2 my-4">
                <h2 class="self-start font-bold">Today's goals</h2>
                <div class="flex flex-col justify-center items-center gap-4 w-full">
                    ${ListTasks(tasks)}
                </div>
            </div>`
}

function Navbar() {
    return `<nav class="flex gap-6 h-16 px-4 justify-between items-center shadow-[0_-6px_12px_rgba(0,0,0,0.15)]  rounded-xl bg-white sticky bottom-0 md:hidden">
        <a href="main-page.html"><i class="fa-solid fa-house text-gray-800 text-3xl "></i></a>
        <button class="open-modal"><i class="fa-solid fa-circle-plus text-gray-800 text-3xl"></i></button>
        <a href=""><i class="fa-solid fa-stopwatch text-gray-800 text-3xl"></i></a>
        <a href="profile.html"><i class="fa-solid fa-user text-gray-800 text-3xl"></i></a>
</nav>`
}

function AddTaskModal() {
    return `<div id="modal" class="hidden fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <!-- Modal Panel -->
      <div class="w-full max-w-md rounded-2xl bg-white shadow-xl" role="dialog" aria-modal="true"
        aria-labelledby="modal-title">
        <!-- Header -->
        <div class="flex items-center justify-between bg-[#0F2854] px-5 py-3 rounded-t-2xl">
          <h1 id="modal-title" class="font-bold text-2xl text-white">New Task</h1>

          <!-- Close button -->
          <button type="button"
            class="close-modal h-10 w-10 rounded-full flex items-center justify-center hover:bg-[#1C4D8D]/70">
            <i class="fa-solid fa-xmark text-xl text-white"></i>
          </button>
        </div>

        <!-- Form -->
        <form id="save-task-form" class="flex flex-col gap-4 p-5 bg-[#BDE8F5] rounded-b-2xl">
          <div class="flex flex-col gap-1">
            <label for="task-name" class="font-semibold text-sm text-[#0F2854]">Name</label>
            <input id="task-name" type="text" placeholder="Task name"
              class="border border-[#4988C4] rounded-2xl bg-white p-3 w-full focus:ring-2 focus:ring-[#4988C4]"
              required />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div class="flex flex-col gap-1">
              <label for="task-duration" class="font-semibold text-sm text-[#0F2854]">Duration (min)</label>
              <input id="task-duration" type="number" min="1" max="25" value="25"
                class="border border-[#4988C4] rounded-2xl bg-white p-3 focus:ring-2 focus:ring-[#4988C4]" required />
            </div>

            <div class="flex flex-col gap-1">
              <label for="task-sessions" class="font-semibold text-sm text-[#0F2854]">Sessions</label>
              <input id="task-sessions" type="number" min="1" value="1"
                class="border border-[#4988C4] rounded-2xl bg-white p-3 focus:ring-2 focus:ring-[#4988C4]" required />
            </div>
          </div>

          <div class="flex flex-col gap-1">
            <label for="task-logo" class="font-semibold text-sm text-[#0F2854]">Logo</label>
            <select id="task-logo" placeholder="logo"
              class="border border-[#4988C4] rounded-2xl bg-white p-3 w-full focus:ring-2 focus:ring-[#4988C4]"
              required>
                    <option value="images/task.png">task logo</option>
                    <option value="images/cafe.png">cafe</option>
                    <option value="images/graphic-tablet.png">graphic-tablet</option>
                    <option value="images/laptop.png">laptop</option>
                    <option value="images/mail.png">mail</option>
                    <option value="images/work.png">work</option>
                    <option value="images/work-table.png">work table</option>
              </select>
          </div>

          <div class="flex flex-col gap-1">
            <label for="task-date" class="font-semibold text-sm text-[#0F2854]">Schedule</label>
            <input id="task-date" type="date"
              class="border border-[#4988C4] rounded-2xl bg-white p-3 focus:ring-2 focus:ring-[#4988C4]" />
          </div>

          <!-- Actions -->
          <div class="flex gap-3 mt-2">
            <button id="save-task" type="submit"
              class="flex-1 h-12 rounded-2xl bg-[#1C4D8D] font-bold text-white hover:bg-[#1C4D8D]/80">
              Add
            </button>
            <button
              class="close-modal flex-1 h-12 rounded-2xl border border-[#4988C4] font-semibold text-[#0F2854] bg-[#BDE8F5] hover:bg-[#4988C4]/30">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
`
}

function editModal(){
        return `<div id="edit-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <!-- Modal Panel -->
      <div class="w-full max-w-md rounded-2xl bg-white shadow-xl" role="dialog" aria-modal="true"
        aria-labelledby="modal-title">
        <!-- Header -->
        <div class="flex items-center justify-between bg-[#0F2854] px-5 py-3 rounded-t-2xl">
          <h1 id="modal-title" class="font-bold text-2xl text-white">Edit Task</h1>

          <!-- Close button -->
          <button type="button"
            class="close-modal h-10 w-10 rounded-full flex items-center justify-center hover:bg-[#1C4D8D]/70">
            <i class="fa-solid fa-xmark text-xl text-white"></i>
          </button>
        </div>

        <!-- Form -->
        <form id="edit-task-form" class="flex flex-col gap-4 p-5 bg-[#BDE8F5] rounded-b-2xl">
          <div class="flex flex-col gap-1">
            <label for="edit-name" class="font-semibold text-sm text-[#0F2854]">Name</label>
            <input id="edit-name" type="text" placeholder="Task name"
              class="border border-[#4988C4] rounded-2xl bg-white p-3 w-full focus:ring-2 focus:ring-[#4988C4]"
              required />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div class="flex flex-col gap-1">
              <label for="edit-duration" class="font-semibold text-sm text-[#0F2854]">Duration (min)</label>
              <input id="edit-duration" type="number" min="1" max="25"
                class="border border-[#4988C4] rounded-2xl bg-white p-3 focus:ring-2 focus:ring-[#4988C4]" required />
            </div>

            <div class="flex flex-col gap-1">
              <label for="edit-sessions" class="font-semibold text-sm text-[#0F2854]">Sessions</label>
              <input id="edit-sessions" type="number" min="1"
                class="border border-[#4988C4] rounded-2xl bg-white p-3 focus:ring-2 focus:ring-[#4988C4]" required />
            </div>
          </div>

          <div class="flex flex-col gap-1">
            <label for="edit-logo" class="font-semibold text-sm text-[#0F2854]">Logo</label>
            <select id="edit-logo" placeholder="logo"
              class="border border-[#4988C4] rounded-2xl bg-white p-3 w-full focus:ring-2 focus:ring-[#4988C4]"
              required>
                    <option value="images/task.png">task logo</option>
                    <option value="images/cafe.png">cafe</option>
                    <option value="images/graphic-tablet.png">graphic-tablet</option>
                    <option value="images/laptop.png">laptop</option>
                    <option value="images/mail.png">mail</option>
                    <option value="images/work.png">work</option>
                    <option value="images/work-table.png">work table</option>
              </select>
          </div>

          <div class="flex flex-col gap-1">
            <label for="edit-date" class="font-semibold text-sm text-[#0F2854]">Schedule</label>
            <input id="edit-date" type="date"
              class="border border-[#4988C4] rounded-2xl bg-white p-3 focus:ring-2 focus:ring-[#4988C4]" />
          </div>

          <!-- Actions -->
          <div class="flex gap-3 mt-2">
            <button id="edit-task" type="submit"
              class="flex-1 h-12 rounded-2xl bg-[#1C4D8D] font-bold text-white hover:bg-[#1C4D8D]/80">
              Update
            </button>
            <button type="submit"
              class="close-modal flex-1 h-12 rounded-2xl border border-[#4988C4] font-semibold text-[#0F2854] bg-[#BDE8F5] hover:bg-[#4988C4]/30">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
`
}

export function Layout(tasks) {
    return `${Header()}
        <main class="m-4">
        ${CurrentTask()}
        ${DailyGoal()}
        ${TodayTasks(tasks)}
        </main>
            ${Navbar()}
            ${AddTaskModal()}
            ${editModal()}
    `
} 
