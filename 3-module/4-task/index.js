function showSalary(users, age) {
  let result = [];

  users.forEach((item) => {
    if (item.age <= age) {
      let info = item.name + ', ' + item.balance;
      result.push(info);
    };
  });
  return result = result.join('\n');
};
