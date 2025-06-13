// Array of all the possible results
const insults = [
    "Dumbass",
    "Idiot",
    "Knucklehead",
    "Doofus",
    "Numbskull",
    "Dingus",
    "Buffoon",
    "Nitwit",
    "Bonehead",
    "Muppet",
    "Clown",
    "Blockhead",
    "Dunce",
    "Meatball",
    "Goober",
    "Twit",
    "Tool",
    "Dork",
    "Airhead",
    "Dipstick",
    "SGA D Rider",
    "Dak Hater"
];

// Get DOM elements
const generateBtn = document.getElementById('generateBtn');
const resultElement = document.getElementById('result');

// Function to get a random insult
function getRandomInsult() {
    const randomIndex = Math.floor(Math.random() * insults.length);
    return insults[randomIndex];
}

// Function to display the result with animation
function displayResult(text) {
    // First, hide the current result
    resultElement.classList.remove('show');
    
    // After a short delay, update the text and show it
    setTimeout(() => {
        resultElement.textContent = text;
        resultElement.classList.add('show');
    }, 250);
}

// Function to add button click animation
function animateButton() {
    generateBtn.classList.add('clicked');
    setTimeout(() => {
        generateBtn.classList.remove('clicked');
    }, 200);
}

// Add event listener to the generate button
generateBtn.addEventListener('click', () => {
    // Animate button
    animateButton();
    
    // Generate and display random result
    const randomInsult = getRandomInsult();
    displayResult(randomInsult);
});

// Optional: Add keyboard support (Enter or Space to generate)
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        generateBtn.click();
    }
});

// Add some fun: Double-click for rapid generation
let doubleClickTimeout;
generateBtn.addEventListener('dblclick', (event) => {
    event.preventDefault();
    clearTimeout(doubleClickTimeout);
    
    // Generate 3 rapid results
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const randomInsult = getRandomInsult();
            displayResult(randomInsult);
        }, i * 600);
    }
}); 