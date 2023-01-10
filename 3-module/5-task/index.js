function getMinMax(str) {
  let arr = str.split(' ');
  let result = [];

  arr.forEach((item) => {
    if (Number(item) !== Number(item)) 0
      else result.push(Number(item));
  });

  let min = Math.min(...result);
  let max = Math.max(...result);

  return result = {
    min: min,
    max: max,
  };
}
