
function checkOddEven(number) {
    if (number % 2 === 0) {
        return `${number} is Even`;
    } else {
        return `${number} is Odd`;
    }
}
const num = 7;
console.log(checkOddEven(num));

