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

// Call the function to display the current date and time
displayCurrentDateTime();