function rot13(str) { // LBH QVQ VG!
  
  var i, j;
  var input = str;
  var output = '';
  var temp;
  var rotarr = [];
  
  rotarr = input.split(' ');
  
  for (i = 0; i < rotarr.length; i++){
    for (j = 0; j < rotarr[i].length; j++) {
      temp = rotarr[i].charCodeAt(j);
      if (temp >= 78) {
        temp = temp - 13;  
      }
      else temp = temp + 13;
      output += String.fromCharCode(temp);
    }
    output += ' ';
  }
  
  output = output.slice(0, -1);
  return output;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");