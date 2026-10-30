
function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
const num1 = 25;
const num2 = 78;
const num3 = 54;
console.log(`Numbers: ${num1}, ${num2}, ${num3}`);
console.log(`Largest (if-else): ${findLargest(num1, num2, num3)}`);
