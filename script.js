// Grab elements from the page
const button = document.getElementById("toggleBtn");
const text = document.getElementById("toolText");

// Add click event listener
button.addEventListener("click", function () {
  // Toggle visibility
  if (text.classList.contains("hidden")) {
    text.classList.remove("hidden");
    button.textContent = "Hide Tool";
  } else {
    text.classList.add("hidden");
    button.textContent = "Show Tool";
  }
});

$(document).ready(function () {
  $("#toggleSkills").click(function () {
    $("#skillsList").slideToggle(); // Toggle the skills list
  });
});