document.addEventListener('DOMContentLoaded', function() {
    // Get the stored visit count from localStorage or initialize to 0
    let visitCount = localStorage.getItem('visitCount');
    if (!visitCount) {
        visitCount = 0;
    }

    // Increment the visit count
    visitCount++;

    // Store the updated visit count in localStorage
    localStorage.setItem('visitCount', visitCount);

    // Display the visit count in the page
    document.getElementById('visit-count').textContent = `Page Visits: ${visitCount}`;
});