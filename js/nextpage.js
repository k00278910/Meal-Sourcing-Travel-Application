// Function to extract the country and location from the URL query parameters
function getParamsFromUrl() {
  var urlParams = new URLSearchParams(window.location.search);
  return {
    country: urlParams.get('country'),
    location: urlParams.get('location')
  };
}

// Update the paragraphs with the selected country and location
var params = getParamsFromUrl();
document.getElementById("countryParagraph").innerText = params.country || 'Country';
document.getElementById("locationParagraph").innerText = params.location || 'Location';
