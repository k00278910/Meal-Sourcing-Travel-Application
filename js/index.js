// selectors
const burgermenu = document.querySelector('.burger');
const navlinks = document.querySelector('.nav-links');
// events
burgermenu.addEventListener('click',burgerClicked);
// functions
function burgerClicked(e){
console.log(navlinks);
// when we click on burger menu we change 
// class nav-links to show-nav-links 
navlinks.classList.toggle('show-nav-links');
}