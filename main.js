
const main = document.querySelector('.main')
const shortcut = document.querySelector('.short-cut')
const firstContain = document.querySelector('.top-container')
const secondContain = document.querySelector('.mid-container') 
const navigation = document.querySelector('.sub-nav')
const action = document.querySelector('.action')

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            
        });
    });
});
alert('test');
action.addEventListener('click', ()=>{
    alert('chua lam ni oi')
})

navigation.addEventListener('click', ()=>{
    main.classList.remove('active')
})

shortcut.addEventListener('click', ()=>{
    main.classList.toggle('active')
})  

function myFunction(x) {
    if (x.matches) { // If media query matches
        
    }
    else{
        main.classList.remove('active')
    }
}
var x = window.matchMedia("(max-width: 1100px)")
myFunction(x)
x.addListener(myFunction)