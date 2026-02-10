import {Layout} from "./ui.js"

const root = document.getElementById("root")
root.innerHTML = Layout();

const body = document.querySelector("body")
body.addEventListener("click", function(event){
    if(event.target.id === "open-modal" || event.target.parentElement.id === "open-modal"){
        console.log("you clicked the right button")
    }else{console.log("you clicked the wrong button")}
})
