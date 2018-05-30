<!DOCTYPE html >
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>JavaScript sandbox</title>

</head>

<body style="background-color: blue">
  <script>

    function adjacentElementsProduct(inputArray) {
        var inputArray = [3, 6, -2, -5, 7, 3]
        
        var arraySum = [];
      for (var i=0; i<inputArray.length; i++){
        var newArray = (inputArray[i] * inputArray[i + 1])
        console.log("newArray: ", newArray)
        //this pushes them into an array each. So each individual number is in its own array
        
        arraySum.push(inputArray[i]* inputArray[i+1])
        
        }
        arraySum.pop()
        console.log("arraySum no NAN? ", arraySum);
        
         console.log(arraySum);
         var largestProduct = Math.max(...arraySum)
         console.log("Math.max ", largestProduct);

    }
      
      adjacentElementsProduct();
  


    
  </script>
  </body>
  </html>