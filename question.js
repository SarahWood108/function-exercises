// Make a function that takes in a string as a parameter
// Turn all othe vowels into question marks
// Hint use a loop

function convertString(someString) {
    let splitString = someString.split("")
    for (i = 0; i <= splitString.length; i++) {
        if (splitString[i] == "a" || splitString[i] == "e" || splitString[i] == "i" || splitString[i] == "o" || splitString[i] == "u") {
            splitString[i] = "?"
        }
    }
    return splitString.join("")
}
console.log(convertString("Amen Rah"))