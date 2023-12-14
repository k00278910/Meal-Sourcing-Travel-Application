function toggleNav() {
  var nav = document.getElementById("navbar");
  nav.classList.toggle("show");
}


var spain_meal = [
  {country:"spain",condition:"cholesterol",mealtime:"breakfast",meal0:"tostada con tomate",meal1:"tostada con aguacate",meal2:"tortilla española"},
  {country:"spain",condition:"cholesterol",mealtime:"lunch",meal0:"gazpacho",meal1:"lentejas con verduras",meal2:"Paella de Mariscos"},
  {country:"spain",condition:"cholesterol",mealtime:"dinner",meal0:"pisto",meal1:"garbanzos con espinacas",meal2:"Bacalao a la Vizcaína"},

  {country:"spain",condition:"skin",mealtime:"breakfast",meal0:"Batido de Maracuyá",meal1:"Avena con Frutas",meal2:"Pan Integral con Aguacate y Salmón"},
  {country:"spain",condition:"skin",mealtime:"lunch",meal0:"tostada-con-tomate y jamon",meal1:"tostada con aguacate",meal2:"tortilla española"},
  {country:"spain",condition:"skin",mealtime:"dinner",meal0:"tostada-con-tomate y jamon",meal1:"tostada con aguacate",meal2:"tortilla española"},

  {country:"spain",condition:"hair",mealtime:"breakfast",meal0:"Tortilla de Espinacas y Champiñones",meal1:"Yogur con Frutas y Frutos Secos",meal2:"Ensalada de Frutas con Kiwi y Semillas de Chía"},
  {country:"spain",condition:"hair",mealtime:"lunch",meal0:"tostada-con-tomate y jamon",meal1:"tostada con aguacate",meal2:"tortilla española"},
  {country:"spain",condition:"hair",mealtime:"dinner",meal0:"tostada-con-tomate y jamon",meal1:"tostada con aguacate",meal2:"tortilla española"}
];

var germany_meal = [{country:"germany",condition:"cholesterol",mealtime:"breakfast",meal1:"muesli-bavaria"},
                    {country:"germany",condition:"cholesterol",mealtime:"lunch",meal1:"linsensuppe"},
                    {country:"germany",condition:"cholesterol",mealtime:"dinner",meal1:"gefullte-paprika"}];

var italy_meal = [{country:"italy",condition:"cholesterol",mealtime:"breakfast",meal1:"fette-biscottate"},
                  {country:"italy",condition:"cholesterol",mealtime:"lunch",meal1:"insalata-caprese"},
                  {country:"italy",condition:"cholesterol",mealtime:"dinner",meal1:"melanzane-alla-parmigiana"}];

var spain_source = [
                  {country:"spain",condition:"cholesterol",mealtime:"breakfast",city:"madrid",source:["Frida","Frida","Bodegas La Ardosa"],link:["https://larrumba.com/restaurantes/frida/","https://larrumba.com/restaurantes/frida/","https://grupoardosa.es/la-ardosa/"]},
                  {country:"spain",condition:"cholesterol",mealtime:"lunch",city:"madrid",source:["InClan Brutal Bar","El Puchero","Arrocería Marina Ventura"],link:["https://inclanbrutalbar.com/","https://elpuchero.com/","https://arroceriaventura.es/"]},
                  {country:"spain",condition:"cholesterol",mealtime:"dinner",city:"madrid",source:["Lambuzo","Casa Dani","Casa Revuelta"],link:["https://www.barlambuzo.com/carta/","https://www.casadani.es/","https://www.casarevuelta.com/"]},
                 
                  {country:"spain",condition:"skin",mealtime:"breakfast",city:"madrid",source:["Frida","Frida","Bodegas La Ardosa"],link:["https://larrumba.com/restaurantes/frida/","https://larrumba.com/restaurantes/frida/","https://grupoardosa.es/la-ardosa/"]},
                  {country:"spain",condition:"skin",mealtime:"lunch",city:"madrid",source:["InClan Brutal Bar","El Puchero","Arrocería Marina Ventura"],link:["https://inclanbrutalbar.com/","https://elpuchero.com/","https://arroceriaventura.es/"]},
                  {country:"spain",condition:"skin",mealtime:"dinner",city:"madrid",source:["Lambuzo","Casa Dani","Casa Revuelta"],link:["https://www.barlambuzo.com/carta/","https://www.casadani.es/","https://www.casarevuelta.com/"]},
                 
                  {country:"spain",condition:"hair",mealtime:"breakfast",city:"madrid",source:["Frida","Frida","Bodegas La Ardosa"],link:["https://larrumba.com/restaurantes/frida/","https://larrumba.com/restaurantes/frida/","https://grupoardosa.es/la-ardosa/"]},
                  {country:"spain",condition:"hair",mealtime:"lunch",city:"madrid",source:["InClan Brutal Bar","El Puchero","Arrocería Marina Ventura"],link:["https://inclanbrutalbar.com/","https://elpuchero.com/","https://arroceriaventura.es/"]},
                  {country:"spain",condition:"hair",mealtime:"dinner",city:"madrid",source:["Lambuzo","Casa Dani","Casa Revuelta"],link:["https://www.barlambuzo.com/carta/","https://www.casadani.es/","https://www.casarevuelta.com/"]},
                 

                  {country:"spain",condition:"cholesterol",mealtime:"breakfast",city:"barcelona",source:["BarcaBreakc1","BarcaBreakc2","BarcaBreakc3"],link:["https://larrumba.com/restaurantes/frida/","https://larrumba.com/restaurantes/frida/","https://grupoardosa.es/la-ardosa/"]},
                  {country:"spain",condition:"cholesterol",mealtime:"lunch",city:"barcelona",source:["BarcaLunchc1","BarcaLunchc2","BarcaLunchc3"],link:["https://inclanbrutalbar.com/","https://elpuchero.com/","https://arroceriaventura.es/"]},
                  {country:"spain",condition:"cholesterol",mealtime:"dinner",city:"barcelona",source:["BarcaDinnerc1","BarcaDinnerc2","BarcaDinnerc3"],link:["https://www.barlambuzo.com/carta/","https://www.casadani.es/","https://www.casarevuelta.com/"]},
                 
                  {country:"spain",condition:"skin",mealtime:"breakfast",city:"barcelona",source:["BarcaBreaks1","BarcaBreaks2","BarcaBreaks3"],link:["https://larrumba.com/restaurantes/frida/","https://larrumba.com/restaurantes/frida/","https://grupoardosa.es/la-ardosa/"]},
                  {country:"spain",condition:"skin",mealtime:"lunch",city:"barcelona",source:["BarcaLunchs1","BarcaLunchs2","BarcaLunchs3"],link:["https://inclanbrutalbar.com/","https://elpuchero.com/","https://arroceriaventura.es/"]},
                  {country:"spain",condition:"skin",mealtime:"dinner",city:"barcelona",source:["BarcaDinners1","BarcaDinners2","BarcaDinners3"],link:["https://www.barlambuzo.com/carta/","https://www.casadani.es/","https://www.casarevuelta.com/"]},
                 
                  {country:"spain",condition:"hair",mealtime:"breakfast",city:"barcelona",source:["BarcaBreakh1","BarcaBreakh2","BarcaBreakh3"],link:["https://larrumba.com/restaurantes/frida/","https://larrumba.com/restaurantes/frida/","https://grupoardosa.es/la-ardosa/"]},
                  {country:"spain",condition:"hair",mealtime:"lunch",city:"barcelona",source:["BarcaLunchh1","BarcaLunchh2","BarcaLunchh3"],link:["https://inclanbrutalbar.com/","https://elpuchero.com/","https://arroceriaventura.es/"]},
                  {country:"spain",condition:"hair",mealtime:"dinner",city:"barcelona",source:["BarcaDinnerh1","BarcaDinnerh2","BarcaDinnerh3"],link:["https://www.barlambuzo.com/carta/","https://www.casadani.es/","https://www.casarevuelta.com/"]},
                 

                  {country:"spain",condition:"cholesterol",mealtime:"breakfast",city:"valencia",source:["ValBreakc1","ValBreakc2","ValBreakc3"],link:["https://larrumba.com/restaurantes/frida/","https://larrumba.com/restaurantes/frida/","https://grupoardosa.es/la-ardosa/"]},
                  {country:"spain",condition:"cholesterol",mealtime:"lunch",city:"valencia",source:["ValLunchc1","ValLunchc2","ValLunchc3"],link:["https://inclanbrutalbar.com/","https://elpuchero.com/","https://arroceriaventura.es/"]},
                  {country:"spain",condition:"cholesterol",mealtime:"dinner",city:"valencia",source:["ValLunchc1","ValLunchc2","ValLunchc3"],link:["https://www.barlambuzo.com/carta/","https://www.casadani.es/","https://www.casarevuelta.com/"]},
                 
                  {country:"spain",condition:"skin",mealtime:"breakfast",city:"valencia",source:["ValBreakS1","ValBreakS2","ValBreakS3"],link:["https://larrumba.com/restaurantes/frida/","https://larrumba.com/restaurantes/frida/","https://grupoardosa.es/la-ardosa/"]},
                  {country:"spain",condition:"skin",mealtime:"lunch",city:"valencia",source:["ValBreakS1","ValBreakS2","ValBreakS3"],link:["https://inclanbrutalbar.com/","https://elpuchero.com/","https://arroceriaventura.es/"]},
                  {country:"spain",condition:"skin",mealtime:"dinner",city:"valencia",source:["ValBreakS1","ValBreakS2","ValBreakS3"],link:["https://www.barlambuzo.com/carta/","https://www.casadani.es/","https://www.casarevuelta.com/"]},
                 
                  {country:"spain",condition:"hair",mealtime:"breakfast",city:"valencia",source:["ValBreakH1","ValBreakH2","ValBreakH3"],link:["https://larrumba.com/restaurantes/frida/","https://larrumba.com/restaurantes/frida/","https://grupoardosa.es/la-ardosa/"]},
                  {country:"spain",condition:"hair",mealtime:"lunch",city:"valencia",source:["ValBreakH1","ValBreakH2","ValBreakH3"],link:["https://inclanbrutalbar.com/","https://elpuchero.com/","https://arroceriaventura.es/"]},
                  {country:"spain",condition:"hair",mealtime:"dinner",city:"valencia",source:["ValBreakH1","ValBreakH2","ValBreakH3"],link:["https://www.barlambuzo.com/carta/","https://www.casadani.es/","https://www.casarevuelta.com/"]},
                 
                  
  ];
                  
 
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

var stringSelectedCountryArray; // name of object array
var selectedCountryArray;// array of objects
var index=0; //meal object
var mealnameObject; // object stores mealname 
var objectLength=0;// entire amount of properties in meal object
var objectMealQty=0;// amount of meals in meal object

var stringSourceArray; // name of source array
var sourceArray;// array of source objects
var sourceIndex=0; //meal object
var sourceObject; // object stores sources
var sourceObjectLength=0;// entire amount of properties in source object
var objectSourceQty=0;// amount of sources in source object
var selectedCityValue;

// set heading as selected options
document.getElementById("country-heading").innerText = params.country || 'Country';
document.getElementById("condition-heading").innerText = params.condition || 'Condition';
document.getElementById("mealtime-heading").innerText = params.mealtime || 'Mealtime'; 
// ** 
if(country&&condition&&mealtime){
stringSelectedCountryArray=country + "_meal";
selectedCountryArray = window[country + "_meal"]; 

stringSourceArray=country + "_source"; 
sourceArray = window[country + "_source"]; // contains object for city,restaurant & link
console.log(sourceArray);

// Function to be called when the city is selected
function selectedCity(currentIndex) {
  var selectedIndex = currentIndex;
  //alert("Selected index Function: " + selectedIndex);
  var cityDropdown = document.getElementById("city");
  selectedCityValue = cityDropdown.value;
  console.log(`*Source Array ${sourceArray}`);
  // source array contains 6 key-object pairs
  // each contains properties: country-condition-mealtime-city-source[]-link[]
  if (sourceArray) {
    sourceArray.forEach(function (obj, sourceIndex) {
      if (obj.city === selectedCityValue && obj.condition === condition && obj.mealtime === mealtime) {
        document.getElementById("city-display").innerText = obj.city;
        document.getElementById("restaurant-display").innerText = obj.source[selectedIndex];
        //document.getElementById("link-display").innerText = obj.link[selectedIndex];
        document.getElementById("link-display").setAttribute("href", obj.link[selectedIndex],target="_blank");
      }
    });
  }
}



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
  { mealtime: 'breakfast',condition: 'cholesterol', images: ['/images/spain-breakfast-cholesterol-0.jpg', '/images/spain-breakfast-cholesterol-1.jpg', '/images/spain-breakfast-cholesterol-2.jpg'] },
  
  { mealtime: 'lunch',condition: 'cholesterol', images: ['/images/spain-lunch-cholesterol-0.jpg', '/images/spain-lunch-cholesterol-1.jpg', '/images/spain-lunch-cholesterol-2.jpg'] },
  
  { mealtime: 'dinner',condition: 'cholesterol', images: ['/images/spain-dinner-cholesterol-0.jpg', '/images/spain-dinner-cholesterol-1.jpg', '/images/spain-dinner-cholesterol-2.jpg'] },

  { mealtime: 'breakfast',condition: 'skin', images: ['/images/spain-breakfast-skin-0.jpg', '/images/spain-breakfast-skin-1.jpg', '/images/spain-breakfast-skin-2.jpg'] },
  { mealtime: 'lunch',condition: 'skin', images: ['/images/spain-lunch-skin-0.jpg', '/images/spain-lunch-skin-1.jpg', '/images/spain-lunch-skin-2.jpg'] },
  { mealtime: 'dinner',condition: 'skin', images: ['/images/spain-dinner-skin-0.jpg', '/images/spain-dinner-skin-1.jpg', '/images/spain-dinner-skin-2.jpg'] },

  { mealtime: 'breakfast',condition: 'hair', images: ['/images/spain-breakfast-hair-0.jpg', '/images/spain-breakfast-hair-1.jpg', '/images/spain-breakfast-hair-2.jpg'] },
  { mealtime: 'lunch',condition: 'hair', images: ['/images/spain-lunch-hair-0.jpg', '/images/spain-lunch-hair-1.jpg', '/images/spain-lunch-hair-2.jpg'] },
  { mealtime: 'dinner',condition: 'hair', images: ['/images/spain-dinner-hair-0.jpg', '/images/spain-dinner-hair-1.jpg', '/images/spain-dinner-hair-2.jpg'] }

];

var spain_nutrition = [
  //                                       meal nutrition =     serving,     carbs,  total fat, saturated fat,protein,cholesterol, total sugar
  { mealtime: 'breakfast',condition: 'cholesterol', nutrition: [["100","N/A","21","8","6.40","8","1","5","4.40","6","0","0","2.9","4"],
  ["150","N/A","20","8","11","12","1.60","6","3.80","5","0","0","1.8","3"] ,["275","N/A","40","15","23","29","3.60","18","13","18","208","69","4.0","6"]]},

  { mealtime: 'lunch',condition: 'cholesterol', nutrition: [["244","N/A","10","4","8.70","11","1.20","6","2.10","4","0","0","6.3","8"],
  ["248","N/A","20","8","2.80","4","1","5","9.30","11","7.40","3","0","0"] ,["100","N/A","37","15","13","16","2","10","19.40","23","1.10","0.50","1.30","2"]]},

  { mealtime: 'dinner',condition: 'cholesterol', nutrition: [["220","N/A","7.20","3","78.00","84","22","5","23.00","36","1","0.5","3.5","4"],
  ["350","N/A","7.80","3","9.00","10","1","5","5.00","6","0","0","0","0"] ,["175","N/A","19","7","20.80","27","2.90","15","16.00","18","0","0","2.0","3"]]}

];

var imageObject; // array of images 
var imageObjectLength=0;// entire amount of properties in Image array
var objectImageQty=0;// amount of images in object

var stringSelectedImageArray=country + "_image"; // name of image object array
var selectedImageArray = window[country + "_image"];  // image 0bject array (this is what we iterate)
var index=0; // actual image object

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

var nutritionObject; // array of nutrition objects 
var nutritionObjectLength=0;// entire amount of properties(1d-arrays+strings) in nutrition array
var objectNutritionQty=0;// amount of nutrition arrays in object, strings removed

var stringSelectedNutritionArray=country + "_nutrition"; // name of nutrition object array
var selectedNutritionArray = window[country + "_nutrition"];  // nutrition 0bject array (this is what we iterate)
var nutritionIndex=0; // actual nutrition object

// ** find qty of nutrition arrays in selected array **
selectedNutritionArray.forEach(function(obj, nutritionIndex) {
  // if object property mealtime=var mealtime && property condition= var condition
  if (obj.mealtime === mealtime && obj.condition === condition){
    nutritionObject=obj.nutrition; // creates a seperate array of nutrition 1d-arrays
    nutritionObjectLength = nutritionObject.length;
    console.log(`Length of Nutrition object at index ${nutritionIndex}: ${nutritionObjectLength}`);
  } 
});

// ensure qty nutrition equals qty meal options 
if (!(nutritionObjectLength === objectMealQty)) {
  alert('number of nutrition objects do not match number of meal options!');
 // return; // This will exit the function
}else{
  //alert('nutrition info qty equal meal options!');
}

let currentIndex = 0;

// function to display a single pair
function displayPair() {
  const mealImage = imageObject[currentIndex];
  const mealNutrition = nutritionObject[currentIndex];
  var meal;
  let dataArray = [];

  selectedCountryArray.forEach((currentMeal) => {
  if (currentMeal.mealtime === mealtime && currentMeal.condition === condition){ 

    meal=currentMeal["meal" + currentIndex];
    document.getElementById("meal-display").innerText = meal;
    document.getElementById("meal-image").src = mealImage;
    // document.getElementById("meal-nutrition").innerText = mealNutrition; 
      dataArray = [
      { id: 'Serving', Amount: mealNutrition[0] + 'g', 'Daily Recommendation': mealNutrition[1] },
      { id: 'Carbs', Amount: mealNutrition[2] + 'g', 'Daily Recommendation': mealNutrition[3]+ '%' },
      { id: 'Total Fat', Amount: mealNutrition[4] + 'g', 'Daily Recommendation': mealNutrition[5]+ '%' },
      { id: 'Saturated Fat', Amount: mealNutrition[6] + 'g', 'Daily Recommendation': mealNutrition[7]+ '%' },
      { id: 'Protein', Amount: mealNutrition[8] + 'g', 'Daily Recommendation': mealNutrition[9]+ '%' },
      { id: 'Cholesterol', Amount: mealNutrition[10] + 'g', 'Daily Recommendation': mealNutrition[11]+ '%' },
      { id: 'Sugar', Amount: mealNutrition[12] + 'g', 'Daily Recommendation': mealNutrition[13]+ '%' },
    ];
   
    const tableContainer = document.getElementById('table-container');
    // clear table
    tableContainer.innerHTML = '';
    // append new table
    const table = createTableFromObjects(dataArray);
    tableContainer.appendChild(table); 

    // must display source restaurant for selection
    // ********************************************
    selectedCity(currentIndex);
    
  }
  
  });
} // end displayPair function

 displayPair();
 
 // Create table for Nutritional Display
function createTableFromObjects(data) {
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');
  
  // Create table header row
  const keys = Object.keys(data[0]);
  for (const key of keys) {
    const headerCell = document.createElement('th');
    headerCell.textContent = key;
    headerRow.appendChild(headerCell);
  }
  table.appendChild(headerRow);

  // Create table data rows
  for (const obj of data) {
    const dataRow = document.createElement('tr');
    for (const key of keys) {
      const dataCell = document.createElement('td');
      dataCell.textContent = obj[key];
      dataRow.appendChild(dataCell);
    }
    table.appendChild(dataRow);
  }
  return table;
} // End function createTableFromObjects

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


