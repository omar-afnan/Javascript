let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

// Function to distribute fruits onto their respective shelves
function distributeFruits() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            // Add apples to the apple shelf
            appleShelf.textContent += fruit[i];
        } else if (fruit[i] === "🍊") {
            // Add oranges to the orange shelf
            orangeShelf.textContent += fruit[i];
        }
    }
}

// Call the function to distribute the fruits
distributeFruits();
