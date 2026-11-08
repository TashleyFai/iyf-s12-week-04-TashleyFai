// PALINDROME CHALLENGE

function isPalindrome(text) {
    const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedText = cleanedText.split("").reverse().join("");

    return cleanedText === reversedText;
}

console.log("madam:", isPalindrome("madam"));
console.log("racecar:", isPalindrome("racecar"));
console.log("hello:", isPalindrome("hello"));
console.log("A man a plan a canal Panama:", isPalindrome("A man a plan a canal Panama"));
