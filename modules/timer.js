

let intervalID = null;
let count = 0

export function StartTimer() {
    const timerCounter = document.getElementById("timer-counter")
    if (intervalID !== null) return;
    intervalID = setInterval(function () {
        count += 1;
        timerCounter.textContent = count;
    }, 1000)
    console.log("starting intervalID =", intervalID);
}

export function PauseTimer() {
    console.log("pausing intervalID =", intervalID);
    clearInterval(intervalID)
    intervalID = null;
}

export function ResetTimer(){
    const timerCounter = document.getElementById("timer-counter")
    clearInterval(intervalID)
    count = 0
    timerCounter.textContent = count
    intervalID = null;
}
