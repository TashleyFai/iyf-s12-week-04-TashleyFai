// REMOVE DUPLICATES CHALLENGE

function removeDuplicatesWithSet(items) {
    return [...new Set(items)];
}

function removeDuplicatesWithFilter(items) {
    return items.filter((item, index) => {
        return items.indexOf(item) === index;
    });
}

const numbers = [1, 2, 3, 2, 4, 1, 5, 3];

console.log("Original array:", numbers);
console.log("Using Set:", removeDuplicatesWithSet(numbers));
console.log("Using filter:", removeDuplicatesWithFilter(numbers));
