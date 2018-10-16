// create an array, loop through check length,
// if even, take the first two letter. if odd do nothing
// combine letters in order 
// print new word


let Arr = ["yellow", "blue", "red"]
let nw = " "
function newWord(w1, w2, w3) {
    for (i = 0; i < Arr.length; i++) {
       
        if (Arr[i].length % 2 == 0) {
            nw += Arr[i][0]
            nw += Arr[i][1]
        }

    }
  
    console.log(nw)

}


  newWord("yellow", "blue", "red")



