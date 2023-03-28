//QUESTION 1
 const FRUITS = ["Banana", "Orange", "Apple"];
 //Remove the last item of the FRUITS array.// 
 FRUITS.pop()
 console.log(FRUITS)

// Add "Kiwi" to the FRUITS array at the end.// 
FRUITS.push("Kiwi")
console.log(FRUITS)

// Add "Tomato" to the FRUITS array at the front.// 
FRUITS.unshift("Tomato")
console.log(FRUITS)

// Remove "Orange" and "Apple" from the FRUITS array//
FRUITS.splice(2, 2)
console.log(FRUITS)

// Sort the FRUITS array alphabetically
FRUITS.sort()
console.log(FRUITS)

//QUESTION2

function varTest() {
  var x = 1;
  {
    var x = 2;
    console.log(x); // value of x with explanation?
    /*Value of x will be 2 as the value of x as it is    
    defined as 2 */
  }
  console.log(x);  // value of x with explanation?
  /*Value of x will be 2 here also as var can be updated 
    and re-declared as well and here value of var was 
    redeclared to 2 in the above function.  */
}
function letTest() {
  let x = 1;
  {
    let x = 2;
    console.log(x);  // value of x with explanation?
    /* Here value of x will be 2 as x is defined as 2 in         this scope  */
  }
  console.log(x);  // value of x with explanation?
  /* Here value of x will be 1 as x is defined as 1 in         this scope.(if this was in the same scope then it         will throw an error as let can only be updated and        cannot be redeclared in the same scope)  */
}
//QUESTION3
/* Iterate through the array and print out something that looks like:

You have watched "Frozen" - 3 stars

You have not seen "In Bruges" - 5 stars

You have watched "Mad Max Fury Road" - 4 stars

You have not seen "Les Miserables" - 3.5 stars */

let movies = [

  { title: 'Frozen', rating: 3, hasWatched: true },
  { title: 'In Bruges', rating: 5, hasWatched: false },
  { title: 'Mad Max Fury Road', rating: 4, hasWatched: true },
  { title: 'Les Miserables', rating: 3.5, hasWatched: false },
];
for (let i = 0; i < movies.length; i++) {
  if (movies[i].hasWatched === true) {
    console.log(`You have watched "${movies[i].title}" - ${movies[i].rating} stars`);
  }
  else {
    console.log(`You have not seen "${movies[i].title}" -  ${movies[i].rating} stars`)
  }
}

