// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Generate a random number between 1 and 100
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    // Get references to important elements in the HTML
    let submitBtn = document.getElementById("submitBtn");
    let userInput = document.getElementById("guessInput");
    let message = document.getElementById("message");

    // Listen for a click on the submit button
    submitBtn.addEventListener("click", function() {
        // Get the user's guess from the input field and convert it to a number
        let userGuess = parseInt(userInput.value);

        // Check if the user's input is valid
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            // Display an error message if the input is not a valid number
            message.textContent = "Please enter a valid number between 1 and 100.";
            message.style.color = "red";
        } else {
            // If input is valid, compare the user's guess with the random number
            if (userGuess === randomNumber) {
                // If the guess is correct, display a success message
                message.textContent = "Congratulations! You guessed it right!";
                // Change the color of the success message to green
                message.style.color = "green";
                // Disable the input field and submit button to prevent further guesses
                userInput.disabled = true;
                submitBtn.disabled = true;
            } else if (userGuess < randomNumber) {
                // If the guess is too low, provide a hint to guess higher
                message.textContent = "Try a higher number.";
                message.style.color = "blue";
            } else {
                // If the guess is too high, provide a hint to guess lower
                message.textContent = "Try a lower number.";
                message.style.color = "blue";
            }
        }
    });
});

// add a reset button
// add a counter button to show the amount of attempts