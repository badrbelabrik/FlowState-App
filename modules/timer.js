

let intervalID = null;
let count = 0

export function StartTimer(){
    const timerCounter = document.getElementById("timer-counter")
    if (intervalID !== null) return;
    intervalID = setInterval(function(){
            count +=1;
            timerCounter.textContent = count;
        }, 1000)
        console.log(intervalID)
    }

export function PauseTimer(){
        clearInterval(intervalID)
        intervalID = null;
}    

