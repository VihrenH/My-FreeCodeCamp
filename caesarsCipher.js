function rot13(str) { // LBH QVQ VG!
  var arr=[];
  for(var i=0;i<str.length;i++){
    if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=77){
      arr.push(String.fromCharCode(str.charCodeAt(i)+13));
    } else if(str.charCodeAt(i)>=78 && str.charCodeAt(i)<=90){
      arr.push(String.fromCharCode(str.charCodeAt(i)-13));
    } else if(str.charCodeAt(i)<=65){
      arr.push(str[i]);
    }
  }
  return arr.join('');
//var str1=str.charCodeAt()-13;
  //return String.fromCharCode(70);
  
}

// Change the inputs below to test
rot13("LBH QVQ VG!");
