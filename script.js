// This runs after DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  const hireBtn = document.getElementById("hireBtn");
  const thankMsg = document.getElementById("thankMsg");

  hireBtn.addEventListener("click", function () {
    thankMsg.classList.remove("hidden");
  });
});