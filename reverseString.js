function reverseWithLoop(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const text = "JavaScript";

console.log(`Original: ${text}`);
console.log(`Reversed (For Loop):  ${reverseWithLoop(text)}`);

