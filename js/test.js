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
var country = "spain";
var condition = "cholesterol";
var mealtime = "breakfast";
//var country = params.country;
//var condition = params.condition;
//var mealtime = params.mealtime;
var mealdisplay = ""; 
var mealNum=0; // find meal position in object

var stringSelectedCountryArray; // name of object array
var selectedCountryArray;// array of objects
var index=0; //meal object
var mealnameObject; // object stores mealname 
var objectLength=0;// entire amount of properties in meal object
var objectMealQty=0;// amount of meals in meal object


// set heading as selected options
document.getElementById("country-heading").innerText = params.country || 'Country';
document.getElementById("condition-heading").innerText = params.condition || 'Condition';
document.getElementById("mealtime-heading").innerText = params.mealtime || 'Mealtime'; 
// ** 
if(country&&condition&&mealtime){
stringSelectedCountryArray=country + "_meal";
selectedCountryArray = window[country + "_meal"]; 

// ** find qty of meals in selected meal array **
if (selectedCountryArray) { //selectedCountryArray is the array of objects
  selectedCountryArray.forEach(function(obj, index) {
    if (obj.mealtime === mealtime && obj.condition === condition){
      mealnameObject=Object.keys(obj);
      objectLength = Object.keys(obj).length;
      objectMealQty = objectLength-3;
     console.log(`Length of object at index ${index}: ${objectLength} qty of meals in object ${objectMealQty}`);
     console.log(`Mealname Object ${mealnameObject}`);
    }
  });
} 
else {
  alert('Country array of objects not located!');
}
}

// ** Create an image array for each country - condition - mealtime combo
var spain_image = [
  { mealtime: 'breakfast',condition: 'cholesterol', images: ['/images/0.jpg', '/images/1.jpg', '/images/2.jpg'] },
  { mealtime: 'lunch',condition: 'cholesterol', images: ['/images/3.jpg', '/images/4.jpg', '/images/5.jpg'] },
  { mealtime: 'dinner',condition: 'cholesterol', images: ['/images/6.jpg', '/images/7.jpg', '/images/8.jpg'] }
];


var stringSelectedImageArray; // name of image object array
var selectedImageArray;// image 0bject array (this is what we iterate)
var index=0; //image object

var imageObject; // array of images 
var imageObjectLength=0;// entire amount of properties in Image array
var objectImageQty=0;// amount of images in object

stringSelectedImageArray=country + "_image";
selectedImageArray = window[country + "_image"]; 

// ** find qty of images in selected array **
selectedImageArray.forEach(function(obj, index) {
  // if object property mealtime=var mealtime && property condition= var condition
  if (obj.mealtime === mealtime && obj.condition === condition){
    imageObject=obj.images; // creates a seperate array of images only
    imageObjectLength = imageObject.length;
    console.log(`Length of Image object at index ${index}: ${imageObjectLength}`);
  } 
});

// ensure qty images equals qty meal options 
if (!(imageObjectLength === objectMealQty)) {
  alert('number of images do not match number of meal options!');
 // return; // This will exit the function
}else{
  //alert('images equal meal options!');
}

// two arrays
//imageObject , this is the array of images
// mealnameObject . this is array of meals
let currentIndex = 0;

// function to display a single pair
function displayPair() {
  const mealImage = imageObject[currentIndex];
  var meal;
  selectedCountryArray.forEach((currentMeal) => {
  if (currentMeal.mealtime === mealtime && currentMeal.condition === condition){   
    meal=currentMeal["meal" + currentIndex];
    document.getElementById("meal-display").innerText = meal;
    document.getElementById("meal-image").src = mealImage;
  }
  });
}

// initial display
displayPair();

// event listener for next button
document.getElementById('next-meal').addEventListener('click', () => {
  // increment index and display the next pair
  currentIndex = (currentIndex + 1) % imageObject.length;
  displayPair();
});

// event listener for previous button
document.getElementById('previous-meal').addEventListener('click', () => {
  // decrement index and display the previous pair
  currentIndex = (currentIndex - 1 + imageObject.length) % imageObject.length;
  displayPair();
});






  
  


     
