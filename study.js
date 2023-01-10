// function getExtremeElements(array) {
  

//   const firstInArray = array[0];
//   // console.log(firstInArray);

//   const lastInArray = array[array.length - 1];
//   // console.log(lastInArray);

//   const together = [firstInArray, lastInArray];
//   // console.log(together);

//   return together;
// }

// console.log(getExtremeElements([1, 2, 3, 4]));

// ============!

// function splitMessage(message, delimeter) {
  
//   let words;

//   words = message.split(delimeter);

//   return words;

// }

// console.log(splitMessage("Hello", ""));
// console.log(splitMessage("Mango is tasty", " "));

// ============!

// function calculateEngravingPrice(message, pricePerWord) {

//   const quantityOfWords = message.split(' ');
 

//   return (quantityOfWords.length * pricePerWord);

// }

// console.log(calculateEngravingPrice("I love you", 10));

// ============!

// function slugify(title) {

//   const lower = title.toLowerCase();

// const newArray = lower.split(" ");
  
//   return newArray.join("-");

// }

// console.log(slugify("Hello my Furious World"));

// ============!

// function makeArray(firstArray, secondArray, maxLength) {
  
//   const allArrays = firstArray.concat(secondArray);
//   console.log(allArrays);

//   if ((allArrays.length) > maxLength){
//     return allArrays.slice(0, maxLength);
//   }

// return allArrays;
  
// }
  
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));

// ============!

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (i = 0; i < order.length; i++) {
//     total += order[i];
//   }

// }
// console.log(calculateTotalPrice([164, 48, 291]));




// function getEvenNumbers(start, end) {

// const evenNumbersArray = [];

//   for (let i = start; i <= end; i += 1){

//     if(i % 2 === 0) {
//       evenNumbersArray.push(i);
//     }
//   }

// return evenNumbersArray;

// }
  
// console.log(getEvenNumbers(2, 5, 7, 12, 16));


// function includes(array, value) {

//   for (number of array) {

//     if(number === value){
//     return "true"
//     }
    
//   }
//  return "false"
// }
 

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));

console.log('Hello world');




