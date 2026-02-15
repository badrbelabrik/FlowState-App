import { ShowMessage } from "./app.js";
import { getTasks, setTasks } from "./storage.js";

let currentTask = null;
let intervalID = null;
let totalSeconds = 0;
let remainingSeconds = 0;
let circumference = 0;
export function initTimer(task){
    currentTask = task
    const tasks = getTasks()
    if(currentTask){  
    const thisTask = tasks.find(item => item.id == currentTask.id)
    thisTask.isActive = true
    setTasks(tasks)    
    document.getElementById("currentImg").src = currentTask.logo
    document.getElementById("currentTitle").textContent = currentTask.name
    document.getElementById("currentDuration").textContent = currentTask.duration +'mins'}
  
    const durationMin = currentTask?.duration ?? 25;
    totalSeconds = durationMin * 60;
    remainingSeconds = totalSeconds;

    setupRing()
    render()
}

export function StartTimer() {
    const timerCounter = document.getElementById("timer-counter")
    const startBtn = document.getElementById("btn-start-timer")
    const timerSessions = document.getElementById("timer-sessions") 
    console.log(currentTask.name)
    if(!timerCounter) return
    if (intervalID !== null) return;
    if(!currentTask){}
    
    startBtn.textContent = "Running"
    
    intervalID = setInterval(function () {
        remainingSeconds -= 1;
        if(remainingSeconds <= 0){
        remainingSeconds = 0;
        render()
        taskStatus()
        ShowMessage("Time ended !!!", 8000,"bg-[#4988C4]")
    }
    render()
    }, 1000)
}

function setupRing() {
  const ring = document.getElementById("ring-progress");
  if (!ring) return;

  const r = ring.r.baseVal.value;           // 46 from your markup
  circumference = 2 * Math.PI * r;          // ~289.03

  ring.style.strokeDasharray = `${circumference}`;
  ring.style.strokeDashoffset = `${circumference}`; // start empty (0% progress)
}
function updateRing() {
  const ring = document.getElementById("ring-progress");
  if (!ring || !totalSeconds || !circumference) return;

  const progress = 1 - remainingSeconds / totalSeconds; // 0 -> 1
  const offset = circumference * (1 - progress);        // circumference -> 0
  ring.style.strokeDashoffset = `${offset}`;
}

function render() {
  const timerCounter = document.getElementById("timer-counter");
  if (timerCounter) timerCounter.textContent = convertSeconds(remainingSeconds);
    if (!circumference) setupRing();
  updateRing();
}

export function PauseTimer() {
    const startBtn = document.getElementById("btn-start-timer")
    clearInterval(intervalID)
    intervalID = null;
    startBtn.textContent = "Resume"
}

export function ResetTimer(){
    const timerCounter = document.getElementById("timer-counter")
    timerCounter.textContent = "00:00"
    clearInterval(intervalID)
    intervalID = null;
}

function convertSeconds(count){
    let min = Math.floor(count/60).toString().padStart(2, '0')
    let sec = Math.floor(count%60).toString().padStart(2, '0')
    return min+':'+sec
}

function taskStatus(){
    currentTask = task
    const tasks = getTasks()
    const thisTask = tasks.find(item => item.id == currentTask.id)
    thisTask.terminated = true
    setTasks(tasks)
}