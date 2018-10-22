let name = "Sarah" // string
let age = 29 // interger
let pi = 3.14 // float
let trueOrFalse = true // Bool

//Logic Statements
// checks if a statement is true or false 

if (trueOrFalse) {
    return "true"

}

//Checks to see if a value is false 
if (!trueOrFalse) {
    return "false"


    //Default value if the firdst condition is met
} else {

    return "true"
}

let favortiteColor = "red";
if (favortiteColor === "blue") {
    return "blue"
} else if (favortiteColor === "red") {
    return "red"
}

//Loops
let counter = 0;
while (trueOrFalse) {
    console.log("true");
    counter++;
    if (counter === 10) {
        trueOrFalse = false;

    }
}


//for Loops
for (i = 0; i <= 100; i++) {
    console.log(i);
}

for (i = 1000; i >= 0; i--) {
    console.log(i)
}

//array
let four = numbers[3]
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}




// D.R.Y. -  don't repeat yourself
// functions

let red = redOrBlue(false);
let blue = redOrBlue(true);
function redOrBlue(value) {
    if (value === true) {
        return "blue"
    } else {
        return "red"
    }
}
if (red === "red") {
    console.log("true")
}
if(blue==="blue"){
    console.log("false")
}







//Array Methods
numbers.sort()
numbers.split(" ")
numbers.splice(4, 0, 8)
let numbersLength = numbers.push(11)
numbers.pop()
numbers.unshift()
numbers.shift()
numbers.join(" ")
numbers.reduce()
numbers.map()
numbers.filter()








