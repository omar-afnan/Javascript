
    let number = Math.random();  
    let result;
    
    if (number < 0.5) {
        result = 'Heads';
    } else {
        result = 'Tails';
    }
    
    console.log("Coin flip result:", result);
    
    const guess = 'Heads'; 
    
    if (guess === result) {
        console.log("You Win!");
    } else {
        console.log("You Lose");
    }
]
