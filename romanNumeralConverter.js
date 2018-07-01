function convertToRoman(num) {
  var m = ["", "M", "MM", "MMM","MMMM","MMMMM","MMMMMM","MMMMMMM","MMMMMMMM","MMMMMMMMM"];
     var c = ["", "C", "CC", "CCC", "CD", "D", 
                        "DC", "DCC", "DCCC", "CM"];
     var x = ["", "X", "XX", "XXX", "XL", "L", 
                        "LX", "LXX", "LXXX", "XC"];
     var i = ["", "I", "II", "III", "IV", "V", 
                        "VI", "VII", "VIII", "IX"];
  var thousands = m[Math.trunc(num/1000)%100];
  var hundreds = c[Math.trunc(num/100)%10];
  var tens =  x[Math.trunc(num/10)%10];
     var ones = i[num%10];
  
 
 return thousands+hundreds+tens+ones;
 
}

convertToRoman(3999);
