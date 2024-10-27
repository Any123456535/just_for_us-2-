let clickCount = 0;
const button = document.getElementById('loveMessage');
const passwordInput = document.getElementById('password'); // Get the password input

button.addEventListener('click', () => { 
    clickCount++; // Increment click count

    const password = passwordInput.value; // Get the password value from input

    if (password === "infinity") { // Check against the correct password
        alert("Correct! Thank you for loving me endlessly!");
        window.location.href = "surprise.html"; // Redirects to surprise.html
    } else {
        alert("Try again. Hint: it's infinity!");
    }
});
