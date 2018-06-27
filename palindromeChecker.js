

function palindrome(str) {
  
  var re =/[A-Za-z0-9]/g;
 var str1=str.toLowerCase().match(re).join("");
  
var found = str.toLowerCase().match(re).reverse().join("");
  return str1 === found;
  //return str1;
  //return found;
  
}

palindrome("My age is 0, 0 si ega ym.");
