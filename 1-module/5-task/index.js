function truncate(str, maxlength) {
  let result;
  len = str.length;
  if (len <= maxlength) {
    result = str;
  } else {
    result = str.slice(0,(maxlength-1)) + '…';
  }
  return result;
}
