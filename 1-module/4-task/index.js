function checkSpam(str) {
  let result;
  str = str.toLowerCase();
  if (str.includes('1xbet')) {
    result = true;
  } else if (str.includes('xxx')) {
    result = true;
  } else result = false;
  return result;
}
