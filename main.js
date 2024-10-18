import "./style.css";
// Select all navbar links
// Get the current URL path
const currentPath = window.location.pathname;

// Select all navbar links
const navbarLinks = document.querySelectorAll(".navbar a");

// Loop through each navbar link
navbarLinks.forEach((link) => {
  // If the link's href matches the current path, add the 'navbar-active' class
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("navbar-active");
  } else {
    // Otherwise, remove the 'navbar-active' class (in case of page reload)
    link.classList.remove("navbar-active");
  }
});
