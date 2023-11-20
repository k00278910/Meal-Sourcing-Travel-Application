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

  function selectedLocation() {
    var selectElement = document.getElementById("country");
    var selectedOption = selectElement.options[selectElement.selectedIndex].value; 
    var imageElement = document.getElementById("flagImage");
    
    switch (selectedOption) {
        
        case 'spain':
            console.log(selectedOption);
            imageElement.src = "images/spain.png";       
            break;
           
        case 'germany':
            console.log(selectedOption);
            imageElement.src = "images/germany.png";                
            break;
                   
        case 'italy':
            console.log(selectedOption);
            imageElement.src = "images/italy.png";     
            break;
            
        default:
            console.log('Not valid option');  
    }
  }
