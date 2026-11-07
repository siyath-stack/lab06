
/**
 * The function below should tie the execution of your algorithms
 * to interactions with elements in your HTML.
 * Once you have completed the lab, this should 
 * allow you to run algorithms within the browser!
 */
function activateButton() {
    const button = document.getElementById('submit');
    const algorithms = { problem1, problem2, problem3, problem4, problem5, problem6 };
    button.addEventListener('click', function() {
        const algorithm = document.getElementById('algorithm').value;
        const input = document.getElementById('input');
        const number = input.valueAsNumber;
        const outputElement = document.getElementById('output');

        if (!input.checkValidity() || !Number.isFinite(number)) {
            outputElement.innerText = 'Please enter a valid number.';
            return;
        }

        const result = algorithms[algorithm](number);
        outputElement.innerText = 'For algorithm ' + algorithm + ' and input ' + number + ', output is ' + result;
    });
}

/**
 * Determines whether a non-negative integer is an Armstrong number.
 * @param {number} number - The integer to check.
 * @returns {boolean} Whether the number is an Armstrong number.
 */
function problem1(number) {
    if (!Number.isInteger(number) || number < 0) {
        return false;
    }

    const digits = String(number).split('').map(Number);
    const power = digits.length;
    const sum = digits.reduce((total, digit) => total + digit ** power, 0);
    return sum === number;
}

/**
 * Determines whether a positive integer equals the sum of its proper divisors.
 * @param {number} number - The integer to check.
 * @returns {boolean} Whether the number is perfect.
 */
function problem2(number) {
    if (!Number.isInteger(number) || number <= 1) {
        return false;
    }

    let divisorSum = 0;
    for (let divisor = 1; divisor <= number / 2; divisor++) {
        if (number % divisor === 0) {
            divisorSum += divisor;
        }
    }
    return divisorSum === number;
}

/**
 * Sums the first N terms of 5 + 55 + 555 + ... .
 * @param {number} number - The number of terms to sum.
 * @returns {number} The sum of the first N terms.
 */
function problem3(number) {
    if (!Number.isInteger(number) || number < 0) {
        return NaN;
    }

    let term = 0;
    let sum = 0;
    for (let index = 0; index < number; index++) {
        term = term * 10 + 5;
        sum += term;
    }
    return sum;
}

/**
 * Determines whether an integer is prime.
 * @param {number} number - The integer to check.
 * @returns {boolean} Whether the number is prime.
 */
function problem4(number) {
    if (!Number.isInteger(number) || number < 2) {
        return false;
    }

    for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
        if (number % divisor === 0) {
            return false;
        }
    }
    return true;
}

/**
 * Calculates the railway luggage charge for a given weight in kilograms.
 * @param {number} number - The luggage weight in kilograms.
 * @returns {number} The charge in dollars.
 */
function problem5(number) {
    if (!Number.isFinite(number) || number < 0) {
        return NaN;
    }

    if (number <= 40) {
        return 5.75;
    }
    if (number <= 500) {
        return 5.75 + Math.ceil((number - 40) / 20) * 3.5;
    }
    return 5.75 + 23 * 3.5 + (number - 500) * 0.5;
}

/**
 * Returns the Nth Fibonacci number, with t0 = 0 and t1 = 1.
 * @param {number} number - The zero-based Fibonacci index.
 * @returns {number} The Fibonacci number at that index.
 */
function problem6(number) {
    if (!Number.isInteger(number) || number < 0) {
        return NaN;
    }

    let previous = 0;
    let current = 1;
    for (let index = 0; index < number; index++) {
        [previous, current] = [current, previous + current];
    }
    return previous;
}

export { problem1, problem2, problem3, problem4, problem5, problem6 };

activateButton();
