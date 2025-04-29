let inputTask = document.querySelector("#addItm")
let Taskbutton = document.querySelector("#addBtn")
let list = document.querySelector(".list")

Taskbutton.addEventListener("click", ()=>{
    let taskText = inputTask.value
    if(taskText !== ""){
        // Create container for the task
        const taskElement = document.createElement("div")
        
        // Create checkbox
        const checkBox = document.createElement("input")
        checkBox.type = "checkbox"
        
        // Create span for the task text
        const taskTextElement = document.createElement("span")
        taskTextElement.textContent = taskText
        
        // Add checkbox change handler
        checkBox.addEventListener("change", function(){
            if(this.checked){
                taskTextElement.style.textDecoration = "line-through"
            } else {
                taskTextElement.style.textDecoration = "none"
            }
        })
        
        // Put everything together
        taskElement.appendChild(checkBox)
        taskElement.appendChild(taskTextElement)
        list.appendChild(taskElement)

        inputTask.value = ""
    }
})