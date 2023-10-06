
let input = document.getElementById("input");
let list = document.getElementById("list");

function addTask(){
    if (input.value.trim() !== ''){
        let li = document.createElement("li");
        li.textContent = input.value;

        let del = document.createElement("span");
        del.textContent = "\u00d7";
        li.appendChild(del); 
        list.appendChild(li);
    }
    
    else{
        alert("Can't Add Empty Task!");
    }
    input.value =""; 
    storeList();
}

list.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        storeList()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        storeList()
    }
});

function storeList(){
    localStorage.setItem('data', list.innerHTML);
}

function showList(){
    list.innerHTML = localStorage.getItem('data');
} 

showList();

// localStorage.clear();
