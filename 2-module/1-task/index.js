function sumSalary(salaries) {

  let totalSum = 0
  for (let key in salaries) {
    let isSalary = typeof salaries[key] === 'number' && Number.isFinite(salaries[key]);

    if (isSalary) {
      totalSum += salaries[key]
    }
  }
  return totalSum
}
