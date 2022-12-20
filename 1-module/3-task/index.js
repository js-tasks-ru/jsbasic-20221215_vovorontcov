function ucFirst(str) {
  let result;
  let a = str.length;
  if (str.length > 0) {
    result = str[0].toUpperCase() + str.slice(1,a);
  } else result = str;
  
  return result;
}
