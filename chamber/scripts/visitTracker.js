// Select the sidebar element where the visit message will be displayed
const visitMessage = document.getElementById("visit-message");

// Get the current date
const currentDate = new Date();
const currentTime = currentDate.getTime();

// Check if there's a stored visit date
const lastVisit = localStorage.getItem("lastVisit");

if (!lastVisit) {
    // First visit message
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    // Convert the stored date from string to number
    const lastVisitTime = parseInt(lastVisit);
    
    // Calculate the difference in time (milliseconds)
    const timeDifference = currentTime - lastVisitTime;
    
    // Convert milliseconds to days
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
    if (daysDifference < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else {
        visitMessage.textContent = `You last visited ${daysDifference} day${daysDifference === 1 ? "" : "s"} ago.`;
    }
}

// Store the current visit date in localStorage
localStorage.setItem("lastVisit", currentTime.toString());
