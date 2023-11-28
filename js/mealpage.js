var spain_meal = [{country:"spain",condition:"cholesterol",mealtime:"breakfast",meal:"Tostada-con-Tomate-y-Jamón"},
                  {country:"spain",condition:"cholesterol",mealtime:"lunch",meal:"Gazpacho"},
                  {country:"spain",condition:"cholesterol",mealtime:"dinner",meal:"Pisto"}];

var germany_meal = [{country:"germany",condition:"cholesterol",mealtime:"breakfast",meal:"Muesli-Bavaria"},
                    {country:"germany",condition:"cholesterol",mealtime:"lunch",meal:"Linsensuppe"},
                    {country:"germany",condition:"cholesterol",mealtime:"dinner",meal:"Gefüllte-Paprika"}];

var italy_meal = [{country:"italy",condition:"cholesterol",mealtime:"breakfast",meal:"Fette-Biscottate"},
                  {country:"italy",condition:"cholesterol",mealtime:"lunch",meal:"Insalata-Caprese"},
                  {country:"italy",condition:"cholesterol",mealtime:"dinner",meal:"Melanzane-alla-Parmigiana"}];
 
 
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
      mealdisplay = selectedCountryArray[index]["meal"];
      document.getElementById("meal-display").innerText = mealdisplay || 'Meal Display';
    }
  }
} else {
  alert('Incorrect User Input');
}

}  



     
