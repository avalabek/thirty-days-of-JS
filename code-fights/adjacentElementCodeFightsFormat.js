//the following worked on codefights. 
function adjacentElementsProduct(inputArray) {
  // var inputArray = [3, 6, -2, -5, 7, 3];

  var arraySum = [];
  for (let i = 0; i < inputArray.length - 1; i++) {
    var newArray = inputArray[i] * inputArray[i + 1];
    // console.log("newArray: ", newArray)
    arraySum.push(newArray);
  }

  console.log(arraySum);

  var largestProduct = Math.max(...arraySum);
  console.log("Math.max ", largestProduct);
  
}
return largestProduct;
// adjacentElementsProduct();
