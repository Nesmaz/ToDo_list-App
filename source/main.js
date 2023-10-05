let input = document.getElementById("input");
let list = document.getElementById("list");

function addTask(){
    if (input.value !== ''){
        let li = document.createElement("li");
        li.textContent = input.value;

        list.appendChild(li);
        let del = document.createElement("span");
        del.textContent = "\u00d7";

        li.appendChild(del); 
    }
    
    else{
        alert("Can't Add Empty Task!");
    }
    input.value =""; 
}