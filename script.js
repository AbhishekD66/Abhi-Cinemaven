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