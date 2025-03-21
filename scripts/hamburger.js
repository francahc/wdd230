const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("nav");

if (hamburger) {
    hamburger.addEventListener("click", () => {
       
        menu.classList.toggle("open");
        hamburger.classList.toggle("open");
    });
}
