const inputArray = [
    [0, 1, 2, 3, 4],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34]
];

const outputString = inputArray.map(row => row.join(',')).join("\n");

console.log(outputString);



function toCsvText(array) {
    return array.join('\n');
}