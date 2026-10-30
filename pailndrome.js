
function isPalindrome(word) {
    // Convert to lowercase to make it case-insensitive
    const cleanWord = word.toLowerCase();
    const reversedWord = cleanWord.split("").reverse().join("");
    return cleanWord === reversedWord;
}

const testWords = ["madam", "Racecar", "JavaScript", "radar", "hello", "noon"];

console.log("Checking Palindromes:");
testWords.forEach((word) => {
    const result = isPalindrome(word);
    console.log(`"${word}" -> ${result ? "Palindrome" : "Not a Palindrome"}`);
});
