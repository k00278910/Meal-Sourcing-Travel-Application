var spain_meal = [{country:"spain",condition:"cholesterol",mealtime:"breakfast",meal1:"tostada-con-tomate-y-jamon",meal2:"tostada-con-aguacate"},
                  {country:"spain",condition:"cholesterol",mealtime:"lunch",meal1:"gazpacho",meal2:"lentejas-con-verduras"},
                  {country:"spain",condition:"cholesterol",mealtime:"dinner",meal1:"pisto",meal2:"garbanzos-con-espinacas"}];

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
document.getElementById("country-heading").innerText = params.country || 'Country';
document.getElementById("condition-heading").innerText = params.condition || 'Condition';
document.getElementById("mealtime-heading").innerText = params.mealtime || 'Mealtime'; 

if(country&&condition&&mealtime){

var selectedCountryArray = window[country + "_meal"]; 

if (selectedCountryArray) {
  for (var index in selectedCountryArray) {
    if (selectedCountryArray[index]["mealtime"] === mealtime) {
      mealdisplay = selectedCountryArray[index]["meal1"];
      document.getElementById("meal-display").innerText = mealdisplay || 'Meal Display';
    }
  }
} else {
  alert('Incorrect User Input');
}

}  


  var images= document.getElementById("images");
  var prevBtn= document.getElementById("prev");
  var forwardBtn= document.getElementById("next");
  var img= document.getElementsByTagName("img");
  var position=0;

  function start(){
    position++;
    changeImage();
  }
  function changeImage(){
    if (position > img.length -2){
      position=0;
    }else if (position<0){
      position=img.length-2;
    }
    images.style.transform=`translateX(${-position*800}px)`;
  }

  forwardBtn.addEventListener("click",()=>{
    position ++;
    changeImage();
  });

  prevBtn.addEventListener("click",()=>{
    position --;
    changeImage();
  });


     
