"use strict";
let inputValue = document.querySelector(".inputdiv input");
const addBtn = document.querySelector(".inputdiv button"),
nightBtn = document.querySelector('.inputdiv .fa-moon'),
dayBtn = document.querySelector('.inputdiv .fa-sun');

// addBtn.addEventListener('click', () => {
    
// })
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

