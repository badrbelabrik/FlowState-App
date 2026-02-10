export function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || []
}
export function setTasks(cards) {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

const tasks = [{name:"reply to emails", sessions:1,logo:"images/blog-1.jpg",isActive:false,terminated:false},
               {name:"organize work space", sessions:1,logo:"images/blog-1.jpg",isActive:false,terminated:false},
               {name:"fix code errors", sessions:2,logo:"images/blog-1.jpg",isActive:false,terminated:false}
]


