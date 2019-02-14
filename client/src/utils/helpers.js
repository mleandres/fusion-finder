// given a string, will capitalize each word in the string specified by the optional separator
export const capitalizeWords = (fullStr, sep = ' ') => {
  return fullStr.split(sep).map(str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  })
}

export const capitalizeArray = (arr) => {
  return arr.map(str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  })
}

// Fisher-Yates shuffle algorithm
export const shuffle = a => {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}
