
function sumWithReduce(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function sumWithForLoop(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function sumWithForOf(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}

const numbers = [10, 20, 30, 40, 50];

console.log("Array:", numbers);
console.log(`Sum (reduce):   ${sumWithReduce(numbers)}`);
console.log(`Sum (for loop): ${sumWithForLoop(numbers)}`);
console.log(`Sum (for...of): ${sumWithForOf(numbers)}`);
