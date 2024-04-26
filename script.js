let inputValue = document.querySelector("#input");
const addBtn = document.querySelector("button"),
listContainer = document.querySelector('ul');

// deleteBtn = document.querySelector('.fa-trash');

addBtn.addEventListener('click',() => {
    if(inputValue.value !== "" ){
            addItem();
    }else{
        alert("Please Enter a Item!...");
    }
})

// addBtn.addEventListener('keydown', (e) => {
//     if(inputValue !== null && inputValue !== ""){
//         if(e.key === 'Enter'){
//             addItem();
//         }
//     }else{
//         alert("Please Enter a Item!...");
//     }
    
// })


function addItem(){
    var listItem = document.createElement('li');
    listItem.innerHTML = `${inputValue.value}`;
    listContainer.appendChild(listItem);
    inputValue.value = '';
    listItem.addEventListener('click', () => {
        listItem.classList.add('success');
        listItem.innerHTML = `<i class="fa fa-check-circle"></i> ${inputValue.value} <i class="fa fa-trash"></i>`;
    })

}


