// Get the input field
let input = document.querySelector("input");

// Append value to input field
function appendValue(value) {
    if (value === '=') {
        try {
            input.value = eval(input.value); // Evaluate expression
        } catch (err) {
            input.value = "Error"; // Show error if invalid
        }
    } else if (value === 'DEL') {
        input.value = input.value.slice(0, -1); // Remove last character
    } else {
        input.value += value; // Add character
    }
}

// Clear entire input
function clearDisplay() {
    input.value = '';
}

