/*Problem:
Add click events to dynamically created <li> elements inside a <ul> using event delegation 
(so that even newly added list items respond to clicks).*/


let list = document.querySelector("#listItem");
let button = document.querySelector("#addBtn");

list.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        console.log("clicked", e.target.textContent);
        e.target.style.textDecoration = "line-through"
    }
});

button.addEventListener("click", function() {
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${list.children.length + 1}`
    list.appendChild(newItem);
});

