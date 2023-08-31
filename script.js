const welcomeText = document.querySelector(".welcome-text");

window.addEventListener("load", () => {
  welcomeText.classList.add("onWelcome");
  setTimeout(() => {
    welcomeText.classList.remove("onWelcome");
  }, 300);
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
})