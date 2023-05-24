const header = document.querySelector("header");
const bg = document.getElementsByClassName("bg");
const background = ["images/background.png", "images/background2.png"];
const bggrid = ["images/bg-grid.png", "images/bg-grid2.png"];

let currentIndex = 0;

function changeBackgroundImage() {
  currentIndex = (currentIndex + 1) % background.length;
  header.style.backgroundImage = "url('" + background[currentIndex] + "')";
  bg[0].style.backgroundImage = "url('" + bggrid[currentIndex] + "')";
}

setInterval(changeBackgroundImage, 3000); 

const hamburger = document.getElementsByClassName("hamburger");
hamburger[0].addEventListener('click', () => {
  hamburger[0].classList.toggle("active");
});