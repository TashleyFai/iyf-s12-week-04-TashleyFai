// REVERSE A STRING CHALLENGE

function reverseWithLoop(text) {
    let reversed = "";

    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }

    return reversed;
}

function reverseWithMethod(text) {
    return text.split("").reverse().join("");
}

const word = "JavaScript";

console.log("Original:", word);
console.log("Reversed using loop:", reverseWithLoop(word));
console.log("Reversed using method:", reverseWithMethod(word));
