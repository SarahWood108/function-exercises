 // Make a function that takes in a string as a parameter
 // Turn all othe vowels into question marks
 // Hint use a loop

 // Determine if a letter is vowel or not


// let arr = ["a", "b", "c", "d", "e", "i", "j", "k", "o", "p",  ]
// let vowelsInStr = " "
// let str = "abcdeijkopu"
// let conso = str.length
// function myVowel(question) {
//     return []

// }
// for (i = 0; i < conso; i++) {
//     if (myVowel(str[i])) {

//         console.log(str[i]);

//         vowelsInStr += str[i];
//     }
// }

// console.log(vowelsInStr);


// let str = "abcdeijkopu"
// let res = str.replace (/\?/gi, "a","e", "i", "o", "u")
// function newString (x){
//    return res 
// } 

// newString(res)
// console.log(res)


function noVowels(stringGoesHere){
let newArray = stringGoesHere.split("")
   for(i = 0; i < newArray.length; i++){
       if(newArray[i] === "a" || newArray[i] === "A"){
           newArray[i] = "?"
       }
       else if(newArray[i] === "e" || newArray[i] === "E"){
           newArray[i] = "?"
       }
       else if(newArray[i] === "i" || newArray[i] === "I"){
           newArray[i] = "?"
       }
       else if(newArray[i] === "o" || newArray[i] === "O"){
           newArray[i] = "?"
       }
       else if(newArray[i] === "u" || newArray[i] === "U"){
           newArray[i] = "?"
       }

   }
   let finishedString = newArray.join(" ")
   console.log(finishedString)
   return finishedString
}

noVowels("Gravity Falls")

