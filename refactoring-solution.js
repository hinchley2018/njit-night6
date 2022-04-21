let text = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
let text2 = "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...";
let text3 = "Curabitur iaculis, nisl ut tristique fringilla, orci purus rutrum arcu, sed pharetra lectus tortor eget orci."

//convert the first letter of each word to upper case
function findLetter(textToProcess) {
    let array1 = textToProcess.split(' ');
    let newarray1 = [];

    for (let x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    let bigText = newarray1.join(' ');
    return bigText
}

//find the longest word
function findLongestWord() {

}

//count number of vowels
function countVowels() {

}

let upperText = findLetter(text)
let upperText2 = findLetter(text2)
let upperText3 = findLetter(text3)

console.log("upperText is works?", upperText === "")
console.log("upperText2 is works?", upperText2 === "")
console.log("upperText3 is works?", upperText3 === "")


//findLongestWord on each text
let longestText = findLongestWord(text)
let longestText2 = findLongestWord(text2)
let longestText3 = findLongestWord(text3)

console.log("longestText is works?", longestText === "")
console.log("longestText2 is works?", longestText2 === "")
console.log("longestText3 is works?", longestText3 === "")


//findLongestWord on each text
let numberVowels = countVowels(text)
let numberVowels2 = countVowels(text2)
let numbersVowels3 = countVowels(text3)

console.log("numberVowels is works?", numberVowels === 10)
console.log("numberVowels2 is works?", numberVowels2 === 23)
console.log("numberVowels3 is works?", numberVowels3 === 13)