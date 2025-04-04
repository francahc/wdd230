// Check if it's the user's first visit or track their last visit
window.addEventListener('load', () => {
    let visitMessage = document.getElementById("visitMessage");

    // Get the stored visit date from localStorage
    let lastVisit = localStorage.getItem('lastVisit');
    let currentVisit = Date.now(); // Current date in milliseconds

    if (!lastVisit) {
        // First visit
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        // Calculate the time difference in days
        let timeDifference = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));
        if (timeDifference < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            visitMessage.textContent = `You last visited ${timeDifference} day${timeDifference > 1 ? 's' : ''} ago.`;
        }
    }

    // Store the current visit date in localStorage
    localStorage.setItem('lastVisit', currentVisit);
});
