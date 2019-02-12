// given a string, will capitalize each word in the string specified by the optional separator
export const capitalizeWords = (fullStr, sep = ' ') => {
  return fullStr.split(sep).map(str => {
    str.charAt(0).toUpperCase() + str.slice(1);
  })
}

export const capitalizeArray = (arr) => {
  return arr.map(str => {
    str.charAt(0).toUpperCase() + str.slice(1);
  })
}
