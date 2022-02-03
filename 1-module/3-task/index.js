function ucFirst(str) {
  // ваш код...
  
  let newStr = str[0].toUpperCase() + str.slice (1);

  if (!str || str.length === 0 ) {
    return str;
  }

  else if ( str.length >= 0) {
  return  newStr;

  } 
  
  else {
    return false
  }

}
