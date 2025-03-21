const hamburger = document.querySelector("#hamburger");

if (hamburger) { 
    hamburger.addEventListener("click", () => {
        const nav = document.querySelector("nav");
        if (nav) {
            nav.classList.toggle("open"); 
        }
    });
} else {
    console.error("Hamburger menu element not found!");
}