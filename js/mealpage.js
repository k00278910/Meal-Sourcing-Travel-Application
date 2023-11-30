var spain_meal = [{country:"spain",condition:"cholesterol",mealtime:"breakfast",meal0:"tostada-con-tomate-y-jamon",meal1:"tostada-con-aguacate",meal2:"meal-3-option"},
  {country:"spain",condition:"cholesterol",mealtime:"lunch",meal0:"gazpacho",meal1:"lentejas-con-verduras",meal2:"meal-3-option"},
  {country:"spain",condition:"cholesterol",mealtime:"dinner",meal0:"pisto",meal1:"garbanzos-con-espinacas",meal2:"meal-3-option"},
  {country:"spain",condition:"hair",mealtime:"breakfast",meal0:"tostada-con-tomate-y-jamon",meal1:"tostada-con-aguacate",meal2:"meal-3-option"}];

var germany_meal = [{country:"germany",condition:"cholesterol",mealtime:"breakfast",meal1:"muesli-bavaria"},
                    {country:"germany",condition:"cholesterol",mealtime:"lunch",meal1:"linsensuppe"},
                    {country:"germany",condition:"cholesterol",mealtime:"dinner",meal1:"gefullte-paprika"}];

var italy_meal = [{country:"italy",condition:"cholesterol",mealtime:"breakfast",meal1:"fette-biscottate"},
                  {country:"italy",condition:"cholesterol",mealtime:"lunch",meal1:"insalata-caprese"},
                  {country:"italy",condition:"cholesterol",mealtime:"dinner",meal1:"melanzane-alla-parmigiana"}];
 
 
 // Function to extract the country and location from the URL query parameters
function getParamsFromUrl() {
  var urlParams = new URLSearchParams(window.location.search);
  return {
    country: urlParams.get('country'),
    condition: urlParams.get('condition'),
    mealtime: urlParams.get('mealtime')
  };
}

// Update the paragraphs with the selected country and location
var params = getParamsFromUrl();
var country = params.country;
var condition = params.condition;
var mealtime = params.mealtime;
var mealdisplay = ""; 
var mealNum=0; // find meal position in object
var propertyCount=0; // length of each meal object

document.getElementById("country-heading").innerText = params.country || 'Country';
document.getElementById("condition-heading").innerText = params.condition || 'Condition';
document.getElementById("mealtime-heading").innerText = params.mealtime || 'Mealtime'; 

if(country&&condition&&mealtime){

var selectedCountryArray = window[country + "_meal"]; 

if (selectedCountryArray) {
  for (var index in selectedCountryArray) {
    if (selectedCountryArray[index]["mealtime"] === mealtime) {
      mealdisplay = selectedCountryArray[index]["meal0"];
      document.getElementById("meal-display").innerText = mealdisplay || 'Meal Display';
    }
  }
} else {
  alert('Incorrect User Input');
}

}  

  var images= document.getElementById("images");
  var prevBtn= document.getElementById("previous-meal");
  var nextBtn= document.getElementById("next-meal");
  var img= document.getElementsByTagName("img");
  var position=0;

  function start(){
    position++;
    changeImage();
  }
  
  function changeMealHeading(){
    // find object length
    selectedCountryArray.forEach(function (mealObject) {
      if (mealObject.mealtime === mealtime && mealObject.condition === condition){
      propertyCount = Object.keys(mealObject).length;
      propertyCount = propertyCount-3;
      
      if (position >= propertyCount){
        position=0; 
      }
       else if (position<0){
         position=propertyCount-1;
       }
      mealNum = mealObject["meal" + position];
      // All meal numbers are between MealNum and propertyCount
      document.getElementById("meal-display").innerText = mealNum;
    }
  });
  }

  function changeImage(){
    if (position > img.length -2){
      position=0;
    }else if (position<0){
      position=img.length-2;
    }
    images.style.transform=`translateX(${-position*800}px)`;
  }

  nextBtn.addEventListener("click",()=>{
    position ++;
    changeMealHeading();
    changeImage();
  });

  prevBtn.addEventListener("click",()=>{
    position --;
    changeMealHeading();
    changeImage();
  });


     
