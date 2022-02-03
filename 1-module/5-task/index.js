function truncate(str, maxlength) {
  // ваш код...

  if (str.lenght === maxlength) {
    return str;
  }

  if (str.lenght > maxlength) {
    return str.slice(0, maxlength - 3) + "…";
  }
  

}
