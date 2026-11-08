// FIND THE LARGEST NUMBER CHALLENGE

function findLargest(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    let largest = numbers[0];

    for (const number of numbers) {
        if (number > largest) {
            largest = number;
        }
    }

    return largest;
}

function findLargestWithReduce(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    return numbers.reduce((largest, number) => {
        return number > largest ? number : largest;
    });
}

const numbers = [12, 45, 7, 89, 23, 56];

console.log("Numbers:", numbers);
console.log("Largest using loop:", findLargest(numbers));
console.log("Largest using reduce:", findLargestWithReduce(numbers));
