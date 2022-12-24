function isEmpty(obj) {
  'use strict'
  let arr = Object.keys(obj);
  let result;
  if (arr.length == 0) {
    result = true;
  } else { result = false};
  return result;
}
