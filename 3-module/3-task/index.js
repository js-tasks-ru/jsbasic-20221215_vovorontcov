function camelize(str) {
  let arr = str.split('-');
  let result = [];

  arr.forEach((item, index) => {
    if (index == 0) result.push(item)
      else result.push(item[0].toUpperCase()+item.slice(1))
  });
  return result = result.join('');
}
