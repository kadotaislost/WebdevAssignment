import "./style.css";

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

const informationContainer = document.querySelector(".information");
const informationTab = document.querySelectorAll(".abttab");
const infomrationText = document.querySelectorAll(".detail");

informationContainer.addEventListener("click", (e) => {
  e.preventDefault();
  const clicked = e.target.closest(".abttab");
  if (!clicked) return;
  informationTab.forEach((t) => t.classList.remove("information-active"));
  clicked.classList.add("information-active");

  informationTab.forEach((t) => {
    if (t.classList.contains("information-active")) {
      t.classList.add("no-hover");
    } else {
      t.classList.remove("no-hover");
    }
  });

  infomrationText.forEach((t) => t.classList.remove("detail-active"));
  document
    .querySelector(`.detail--${clicked.dataset.tab}`)
    .classList.add("detail-active");
});
