function reverseString(str) {
    var reversed = '';
    for (var i = str.length - 1; i >= 0; i--) {
      reversed += str.charAt(i);
    }
    return reversed;
  }
  
  var input = 'webmaster';
  var reversedInput = reverseString(input);
  console.log(reversedInput); 
  