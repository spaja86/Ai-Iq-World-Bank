// script.js

// Example of interactive features for a banking website

// Function to display the current date and time
function displayCurrentDateTime() {
    const currentDateTime = new Date().toISOString();
    console.log(`Current Date and Time (UTC): ${currentDateTime}`);
}

// Function to handle user login
function handleUserLogin(username, password) {
    // Simulate a login verification
    if (username === 'testUser' && password === 'testPass') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
}

// Function to display and animate the interest rate risk indicators
function displayInterestRateRisk() {
    const simulatedRate = 4.75; // Simulated current interest rate in %

    const rateEl = document.getElementById('current-rate');
    const levelEl = document.getElementById('risk-level');
    const barEl = document.getElementById('rate-bar');

    if (!rateEl || !levelEl || !barEl) return;

    // Determine risk level
    let riskLabel, riskClass;
    if (simulatedRate < 3) {
        riskLabel = 'Nizak / Low';
        riskClass = 'risk-low';
    } else if (simulatedRate <= 6) {
        riskLabel = 'Srednji / Medium';
        riskClass = 'risk-medium';
    } else {
        riskLabel = 'Visok / High';
        riskClass = 'risk-high';
    }

    rateEl.textContent = simulatedRate.toFixed(2) + '%';
    levelEl.textContent = riskLabel;
    levelEl.className = 'risk-indicator ' + riskClass;

    // Animate the rate bar (max scale = 10%)
    const barWidthPercent = Math.min((simulatedRate / 10) * 100, 100);
    barEl.style.width = '0%';
    setTimeout(() => {
        barEl.style.width = barWidthPercent + '%';
    }, 100);
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function () {
    displayCurrentDateTime();
    displayInterestRateRisk();
});