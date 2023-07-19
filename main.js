
const main = document.querySelector('.main')
const shortcut = document.querySelector('.short-cut')
const firstContain = document.querySelector('.top-container')
const secondContain = document.querySelector('.mid-container') 
const action = document.querySelector('.sign-in')

shortcut.addEventListener('click', ()=>{
    main.classList.toggle('active')
})  
