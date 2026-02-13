
function Header() {
  return `<div id="top-bar" class="bg-white flex justify-between gap-4 m-4 sticky top-0 md:max-w-sm md:fixed md:top-0">
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
            <button class="flex justify-center items-center h-8 w-8 rounded-full bg-[#4988C4] cursor-pointer">
                <i class="fa-solid fa-pause text-white"></i>
            </button>
        </div>
    </div>`
}

function DailyGoal() {
  return `<div id="daily-goal" class="flex flex-col justify-center items-center gap-2 my-4">
        <h2 class="self-start font-bold">Daily goal</h2>
        <div class="flex gap-2 justify-between items-center h-24 w-full bg-[#4988C4] rounded-xl px-4">
            <img src="images/progress.png" alt="" class="h-16">
            <div class="flex flex-col gap-2">
                <h2 class="font-bold text-center">Your daily goals almost done</h2>
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
                        <button class="play-button cursor-pointer"><i class="fa-solid fa-circle-play text-[#4988C4] text-3xl"></i></button>
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

function ProgressBar(){
  return `<div class="relative flex items-center justify-center h-64 w-64">
  <!-- Progress Ring -->
  <svg
    class="absolute w-full h-full -rotate-90"
    viewBox="0 0 100 100"
  >
    <!-- Background Circle -->
    <circle
      cx="50"
      cy="50"
      r="46"
      stroke="#e5e7eb"
      stroke-width="8"
      fill="none"
    />

    <!-- Progress Circle -->
    <circle
      cx="50"
      cy="50"
      r="46"
      stroke="currentColor"
      stroke-width="8"
      fill="none"
      stroke-dasharray="289"
      stroke-dashoffset="72"
      stroke-linecap="round"
      class="text-[#4988C4] transition-all duration-500"
    />
  </svg>

  <!-- Center Content -->
  <div class="absolute inset-0 flex flex-col items-center justify-center text-center">
    <h2 id="timer-counter" class="text-3xl font-bold">25:00</h2>
    <span id="timer-sessions" class="text-sm text-gray-500">1 of 1 sessions</span>
  </div>
</div>`
}

function TimerTools(){
  return `  <h3 class="font-bold text-[#000e27] text-xl">Stay focused for 25 minutes</h3>
            <div class="flex justify-around items-center gap-16">
                <i class="fa-solid fa-rotate-right text-[#000e27] text-3xl cursor-pointer"></i>
                <p class="start-timer font-bold text-[#000e27] text-4xl cursor-pointer">START</p>
                <i class="fa-solid fa-pause text-[#000e27] text-3xl cursor-pointer"></i>
            </div>`
}

function Navbar() {
  return `<nav class="
  flex gap-6 h-16 px-4 justify-between items-center
  shadow-[0_-6px_12px_rgba(0,0,0,0.15)]
  rounded-xl
  bg-white
  sticky bottom-0

  md:fixed md:left-0 md:top-1/2 md:-translate-y-1/2
  md:h-auto md:flex-col md:items-start md:justify-center md:py-6 md:gap-8
  md:shadow-[6px_0_12px_rgba(0,0,0,0.15)]
  md:rounded-r-2xl md:rounded-l-none
">
        <button class="go-main flex items-center gap-3 cursor-pointer"><i class="fa-solid fa-house text-gray-800 text-2xl"></i><span class="hidden md:inline text-gray-800 font-medium">Home</span></button>
        <button class="open-modal flex items-center gap-3 cursor-pointer"><i class="fa-solid fa-circle-plus text-gray-800 text-3xl"></i>  <span class="hidden md:inline text-gray-800 font-medium">Add task</span></button>
        <button class="go-timer flex items-center gap-3 cursor-pointer"><i class="fa-solid fa-stopwatch text-gray-800 text-3xl"></i></i><span class="hidden md:inline text-gray-800 font-medium">Timer</span></button>
        <button class="flex items-center gap-3 cursor-pointer"><i class="fa-solid fa-calendar-days text-gray-800 text-3xl"></i><span class="hidden md:inline text-gray-800 font-medium">Calendar</span></button>
        <button class="flex items-center gap-3 cursor-pointer"><i class="fa-solid fa-user text-gray-800 text-3xl"></i><span class="hidden md:inline text-gray-800 font-medium">Profile</span></button>
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

function editModal() {
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

function deleteModal() {
  return `        <div id="delete-modal" tabindex="-1"
            class="hidden fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div class="relative p-4 w-full max-w-md max-h-full">
                <div class="relative bg-gray-100 border border-default rounded-base shadow-sm rounded-2xl p-4 md:p-6">
                    <button type="button"
                        class="close-modal absolute top-3 end-2.5 text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="popup-modal">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18 17.94 6M18 18 6.06 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    <div class="p-4 md:p-5 text-center">
                        <svg class="mx-auto mb-4 text-fg-disabled w-12 h-12" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <h3 class="mb-6 text-body">Are you sure you want to delete this task?</h3>
                        <div class="flex items-center space-x-4 justify-center">
                            <button id="delete-task-button" data-modal-hide="popup-modal" type="button"
                                class="text-white bg-red-600 box-border border border-transparent hover:bg-danger-strong focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                                Yes, I'm sure
                            </button>
                            <button data-modal-hide="popup-modal" type="button"
                                class="close-modal text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">No,
                                cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
}

export function MainLayout(tasks) {
  return `${Header()}
        <main class="mx-auto w-full max-w-xl p-4 md:p-8">
        ${CurrentTask()}
        ${DailyGoal()}
        ${TodayTasks(tasks)}
        </main>
            ${Navbar()}
            ${AddTaskModal()}
            ${editModal()}
            ${deleteModal()}
    `
}

export function TimerLayout(){
    return `${Header()}
        <main class="flex flex-col gap-4 justify-center items-center mx-4 min-h-screen pb-16">
            ${CurrentTask()}
            ${ProgressBar()}
            ${TimerTools()}
        </main>
            ${Navbar()}
    `
}

