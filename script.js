document.getElementById("editProfileBtn").addEventListener("click", function () {
  var newUsername = prompt("Enter new username:");
  if (newUsername !== null && newUsername !== "") {
    document.getElementById("username").innerText = newUsername;
  }
});



// Function to handle editing location
document.getElementById("editLocationBtn").addEventListener("click", function () {
  var newLocation = prompt("Enter new location:");
  if (newLocation !== null && newLocation !== "") {
    document.getElementById("location").innerText = newLocation;
  }
});

// Function to handle editing movies
var editButtons = document.querySelectorAll(".edit-movie-btn");
editButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var movieTitle = this.parentNode.querySelector("h3").innerText;
    var newTitle = prompt("Enter new title for " + movieTitle + ":");
    if (newTitle !== null && newTitle !== "") {
      this.parentNode.querySelector("h3").innerText = newTitle;
    }
  });
});



// Check if geolocation is supported by the browser
if ("geolocation" in navigator) {
  // Prompt user for permission to access their location
  navigator.geolocation.getCurrentPosition(
    // Success callback function
    (position) => {
      // Get the user's latitude and longitude coordinates
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      // Do something with the location data, e.g. display on a map
      console.log(`Latitude: ${lat}, longitude: ${lng}`);
    },
    // Error callback function
    (error) => {
      // Handle errors, e.g. user denied location sharing permissions
      console.error("Error getting user location:", error);
    }
  );
} else {
  // Geolocation is not supported by the browser
  console.error("Geolocation is not supported by this browser.");
}


let locationUpdate = document.querySelector('#location');

locationUpdate.innerHTML ="new loc";
//console.log(locationUpdate);