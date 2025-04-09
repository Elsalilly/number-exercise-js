
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
    return guess;
}
const rightAnswer = guessNumberGame ();
console.log("Congrats you win!");
*/


/* Excerise 2 */
function generateRandomArray(length) {
    const arrayRan = [];

    for(let i = 0; i < length; i++) {
        let score = Math.floor(Math.random() * 100) +1;
    
        arrayRan[i] = score;
        }
    return arrayRan;    
}

const array = generateRandomArray(10);
console.log(array);



/* Excerise 3

function generateRandomArray(length) {
    const arrayRan = [];
    for(let i = 0; i <= length; i++) {
        let score = Math.floor(Math.random() * 100) +1;
        arrayRan.push(score);
        
        }
    return arrayRan;    
}
function sumEvenNumbers (array)  {
    let sum = 0;
    for(let i=0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i];
        }
    }
    return sum;
}

const array = generateRandomArray(10);
console.log(array);

const evenSum = sumEvenNumbers(array);
console.log("Sum of even numbers:", evenSum);

 */


/* Extra */

/* Excercise 1
    const target = Math.floor(Math.random() * 10 +1);
    let guess = null;

    while(guess !== target) {
        console.log(`Target: ${target}, Guess ${guess}`);
        guess = parseFloat(prompt("Make a guess, please"));
    }

    console.log(`Target: ${target}, Guess ${guess}`);
    console.log("Congrats you win!");
*/

/* Excerise 2
function generateRandomArray() {
    let array = [];
    let length = array.length;
    for(let i = 0; i < 40; i++) {
        array.push(Math.floor(Math.random() * 100) +1);
    }
}
console.log(generateRandomArray());


function generateRandomArray(sum) {

    for(let i = 2; i <= 20; i+=2) {
        let score = Math.floor(Math.random() * 20 / 2 +1) *2;
        if (i == 20) {
            break;
        } else {
        console.log(score);
        }
    }
}

console.log(generateRandomArray());
*/
