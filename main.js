
/* Excerise 1 
function guessNumberGame() {
    const target = Math.floor(Math.random() * 10 + 1);
    let guess = null;

    while(guess !== target) {
        if (guess == null) { 
            console.log(`Target: ${target}, Guess: ${guess}`);
            guess = parseFloat(prompt("Make a guess, please"));
        }
        else if (guess > target) {
            console.log(`Target: ${target}, Guess: ${guess}`);
            guess = parseFloat(prompt("Make a guess, but a bit lower"));
        } else if (guess < target) {
            console.log(`Target: ${target}, Guess: ${guess}`);
            guess = parseFloat(prompt("Make a guess, but a bit higher"));
        }
    
    }

}

console.log(guessNumberGame());
console.log("Congrats you win!");
*/

/*
    const target = Math.floor(Math.random() * 10 +1);
    let guess = null;

    while(guess !== target) {
        console.log(`Target: ${target}, Guess ${guess}`);
        guess = parseFloat(prompt("Make a guess, please"));
    }

    console.log(`Target: ${target}, Guess ${guess}`);
    console.log("Congrats you win!");
*/

function generateRandomArray() {

    for(let i = 0; i <= 20; i++) {
        let score = Math.floor(Math.random() * 100 +1);
        if (i == 20) {
            break;
        } else {
        console.log(score);
        }
    }
}

console.log(generateRandomArray());