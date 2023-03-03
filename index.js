// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(n){
    cats.push(n);
}

function destructivelyPrependCat(n){
    cats.unshift(n);
}

function destructivelyRemoveFirstCat() {cats.shift()}
function destructivelyRemoveLastCat() {cats.pop()}

function appendCat(n) {
    return [...cats,n]
}

function prependCat(n) {
    return [n, ...cats];
}

function removeLastCat() {
    return cats.slice(0, cats.length-1);
}

function removeFirstCat() {
    return cats.slice(1, cats.length)
}