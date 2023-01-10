function filterRange(arr, a, b) {
  let result = [];

  arr.forEach((item) => {
    if (a <= item, item <=b) result.push(item);    
  });

  return result;
}
