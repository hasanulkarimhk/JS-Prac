// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript



// Function to split digits of a number into an array
function numberToArray(number) {
    return Array.from(String(number), Number);
}

// Example usage:
let inputNumber = 231;
let resultArray = numberToArray(inputNumber);
console.log(resultArray);
