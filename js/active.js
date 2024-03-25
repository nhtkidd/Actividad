const activePage = window.location.pathname;
console.log(activePage, 'EL PATH NAME');
const navLink = document.querySelectorAll("nav a");
navLink.forEach((link) => {
  if (link.href.includes(activePage)) {
    link.classList.add("active");
  }
});

function myFunction() {
  var x = document.getElementById("nav-style");
  if (x.className === "nav-style") {
    x.className += " responsive";
  } else {
    x.className = "nav-style";
  }
}
