// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
    arr.forEach(function (item, index) {
        if (item =='Waldo') {
          found(index);
        }
    }) 
}
  function actionWhenFound(where) {
    console.log(`Found Waldo at index ${where}`);
  }
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);