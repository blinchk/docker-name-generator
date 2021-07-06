import values from './values.js';

function generate() {
    const left = values.left
    const right = values.right

    const leftIndex = getRandomIndex(left.length);
    const rightIndex = getRandomIndex(right.length);

    return {
        left: left[leftIndex],
        right: right[rightIndex]
    }
}

function generateCapitalized() {
    let name = generate()
    name.left = capitalize(name.left)
    name.right = capitalize(name.right)
    return {
        left: name.left,
        right: name.right
    }
}

function generateAsPeopleName() {
    let name = generateCapitalized()
    return name.left + ' ' + name.right
}

function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr)
}

function capitalize(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1)
}

const generator = {
    generate,
    generateAsPeopleName,
    generateCapitalized
}

export default generator;