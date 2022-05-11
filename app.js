// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// targeting the hamburger menu
const hamburger = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

hamburger.addEventListener("click", () => {
  console.log("Clicked");
  // you do not need the DOT within the methods here
  if (links.classList.contains("show-links")) {
    links.classList.add("show-links");
  } else {
    links.classList.remove("show-links");
  }

  //   now we toggle the links
  links.classList.toggle("show-links");
});
