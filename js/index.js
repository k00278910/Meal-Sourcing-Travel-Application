 
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
            imageElement.src = "images/spain.png";       
            break;   
        case 'germany':
            imageElement.src = "images/germany.png";                
            break;            
        case 'italy':
            imageElement.src = "images/italy.png";     
            break;   
        default:
            console.log('Not a valid option');  
    }
    return selectedOption; 
}

var result = selectedLocation();
alert(result); // You can now use the 'result' variable as needed.
    

  function selectedCondition() {
    var selectElement = document.getElementById("condition");
    var selectedOption = selectElement.options[selectElement.selectedIndex].value; 
    var imageElement = document.getElementById("conditionImage");
    
    switch (selectedOption) {
        case 'cholesterol':
            console.log(selectedOption);
            imageElement.src = "images/cholesterol.png";       
            break;
        case 'skin':
            console.log(selectedOption);
            imageElement.src = "images/skin.png";                
            break;        
        case 'alopecia':
            console.log(selectedOption);
            imageElement.src = "images/hair.png";     
            break;
        default:
            console.log('Not valid option');  
    }
        return selectedOption;
  }

  function selectedMealtime() {
    var selectElement = document.getElementById("mealtime");
    var selectedOption = selectElement.options[selectElement.selectedIndex].value; 
    var imageElement = document.getElementById("mealtimeImage");
    
    switch (selectedOption) {
        case 'breakfast':
            imageElement.src = "images/breakfast.png";     
            break;
        case 'lunch':
            imageElement.src = "images/lunch.png";                
            break;         
        case 'dinner':
            imageElement.src = "images/dinner.png";     
            break;
        default:
            console.log('Not valid meal selection');  
    }
        return selectedOption;    
  }
  
  
  function goToMealPage() {
    // Get the selected values from the dropdowns
    var selectedCountry = document.getElementById("country").value;
    var selectedCondition = document.getElementById("condition").value;
    var selectedMealtime = document.getElementById("mealtime").value;
    // Redirect to nextpage.html with the selected country and location as query parameters
    // URL of the current web page: const currentUrl = window.location.href
    window.location.href = "mealpage.html?country=" + selectedCountry + "&condition=" + selectedCondition + "&mealtime=" + selectedMealtime;
  }
  
   
  
  
