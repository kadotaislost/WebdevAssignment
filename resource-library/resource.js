const searchtags = document.querySelector(".search-tags");
const tag = document.querySelectorAll(".tag");

searchtags.addEventListener("click", (e) => {
  e.preventDefault();
  const clicked = e.target.closest(".tag");
  if (!clicked) return;
  tag.forEach((t) => t.classList.remove("tag-active"));
  clicked.classList.add("tag-active");
});
