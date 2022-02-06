function showSalary(users, age) {
  return users, age 
  .map (
    function (userAge) {
      if (userAge <= age) {
        return users.toString(`\n{user.name , user.balance}`)
      }
    })
}
