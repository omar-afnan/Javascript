let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function () {
    // Pick two random fighters
    let randomFighter1 = Math.floor(Math.random() * fighters.length);
    let randomFighter2 = Math.floor(Math.random() * fighters.length);

    // Ensure the two fighters are different
    while (randomFighter1 === randomFighter2) {
        randomFighter2 = Math.floor(Math.random() * fighters.length);
    }

    // Display the fighters in the stage div
    stageEl.textContent = `${fighters[randomFighter1]} vs ${fighters[randomFighter2]}`;
});
