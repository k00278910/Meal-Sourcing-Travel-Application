function goToNextPage() {
  // Get the selected values from the dropdowns
  var selectedCountry = document.getElementById("countries").value;
  var selectedLocation = document.getElementById("locations").value;

  // Redirect to nextpage.html with the selected country and location as query parameters
  // URL of the current web page: const currentUrl = window.location.href
  window.location.href = "nextpage.html?country=" + selectedCountry + "&location=" + selectedLocation;
}