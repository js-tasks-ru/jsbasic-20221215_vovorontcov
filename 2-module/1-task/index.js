function sumSalary(salaries) {
  'use strict'
  let sum = 0;
  for (let prop in salaries) {
    if (isFinite(salaries[prop]) == true){
      sum = sum + salaries[prop]
    }
    
  }
  return sum;
}
