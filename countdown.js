var countdownGenerator = function (x) {
    /* your code here */
    var countDown = x + 1;
    return function () { 
      countDown --;
      if (countDown == 0) {
          console.log('Blast Off');
      }
      if (countDown < 0) {
          console.log('Rockets already gone, bub!');
      }
      else {
          console.log(`T-minus ${countDown}`);
      }

    }
  };
  
  var countdown = countdownGenerator(3);
  countdown(); // T-minus 3...
  countdown(); // T-minus 2...
  countdown(); // T-minus 1...
  countdown(); // Blast Off!
  countdown(); // Rockets already gone, bub!
  countdown(); // Rockets already gone, bub!