function ucFirst(str) {
  // ваш код...
  
  if (!str || str.length === 0 ) {
    return str;
  }

  let newStr = str[0].toUpperCase() + str.slice (1);

  if ( str.length >= 0) {
  return  newStr;

  } 

}

