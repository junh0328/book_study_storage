/* 반복문 쪼개기 */

function reportYoungestAgeAndTotalSalary(people) {
  function youngestAge() {
    let youngest = people[0] ? people[0].age : Infinity;

    for (const p of people) {
      if (p.age < youngest) youngest = p.age;
    }
    return youngest;
  }

  function youngestAge2() {
    return Math.min(...people.map((p) => p.age));
  }

  function totalSalary() {
    let totalSalary = 0;

    for (const p of people) {
      totalSalary += p.salary;
    }
    return totalSalary;
  }

  function totalSalary2() {
    return people.reduce((total, p) => (total += p.salary), 0);
  }

  return `youngestAge: ${youngestAge()}, totalSalary: ${totalSalary()}`;
}
