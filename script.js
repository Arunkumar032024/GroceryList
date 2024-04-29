let listContainer = document.querySelector(".list-container");
let inputBox = document.querySelector(".inputdiv input");    
const addBtn = document.querySelector(".inputdiv button"),
nightBtn = document.querySelector('.inputdiv .fa-moon'),
dayBtn = document.querySelector('.inputdiv .fa-sun');

// code for add item 
addBtn.addEventListener('click', () => {
    addTask();    
})

inputBox.addEventListener('keydown', (e) => {
    if(e.key == 'Enter'){
        addTask();
    }
})

function addTask(){
    if(inputBox.value === ''){
        alert("Write something...");
    }else{
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.classList.add('fa-solid');
        span.classList.add('fa-trash');
        li.appendChild(span);

    }
    inputBox.value = '';
    saveData();
}
listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle("delete");
        saveData();
    }else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
})
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

// End code for add item 

// code for day night mode
nightBtn.addEventListener('click', () => {
    document.querySelector('.container').style.background = "#000";
    document.querySelector('.container').style.color = "#fff";
    nightBtn.classList.remove('active');
    dayBtn.classList.add('active');
})
dayBtn.addEventListener('click', () => {
    document.querySelector('.container').style.background = "#fff";
    document.querySelector('.container').style.color = "#000";
    dayBtn.classList.remove('active');
    nightBtn.classList.add('active');
})

// End code for day night mode