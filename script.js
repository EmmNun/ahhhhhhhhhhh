const colors = ["#fff9f7", "#fefff7", "#f7fff7"]; // grey, yellow, green

// Prompt for user input
const userName = prompt("What is your name?");
const colorChoice = prompt("Pick a background color: 0 for grey, 1 for yellow, 2 for green");

// Store input in an object
const userInfo = {
    name: userName,
    selectedColor: colors[colorChoice]
};

// Array Check
console.log("The first color in the array is:", colors[0]); // should output grey HEX

// Apply color to background
document.body.style.backgroundColor = userInfo.selectedColor;
