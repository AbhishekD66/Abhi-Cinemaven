document.getElementById("editProfileBtn").addEventListener("click", function () {
  var newUsername = prompt("Enter new username:");
  if (newUsername !== null && newUsername !== "") {
    document.getElementById("username").innerText = newUsername;
  }
});

document.getElementById("editLocationBtn").addEventListener("click", function () {
  var newLocation = prompt("Enter new location:");
  if (newLocation !== null && newLocation !== "") {
    document.getElementById("location").innerText = newLocation;
  }
});

document.getElementById("change-image-btn").addEventListener("click", function () {
  document.getElementById('imageSelectionModal').style.display = "block";
});

document.getElementsByClassName("close")[0].addEventListener("click", function () {
  document.getElementById('imageSelectionModal').style.display = "none";
});
window.onclick = function (event) {
  if (event.target == document.getElementById('imageSelectionModal')) {
    document.getElementById('imageSelectionModal').style.display = "none";
  }
};

var imageOptions = document.querySelectorAll(".image-option");
imageOptions.forEach(function (option) {
  option.addEventListener("click", function () {
    var newSrc = this.src;
    document.getElementById("profile-image").src = newSrc;
    document.getElementById('imageSelectionModal').style.display = "none";
  });
});