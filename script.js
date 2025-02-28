// Navigation links hover effect
const navLinks = document.querySelectorAll(".menu a");
navLinks.forEach((link) => {
  link.addEventListener("mouseover", function () {
    this.style.color = "red";
  });
  link.addEventListener("mouseout", function () {
    this.style.color = "";
  });
});

// Click event on the image
const projectImage = document.querySelector(".image img");
  projectImage.addEventListener("click", function () {
    alert("You clicked the project image!");
  });

