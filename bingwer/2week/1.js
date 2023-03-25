function solution(N, stages) {
  const temp = [];
  let people = stages.length;

  for (let i = 1; i <= N; i++) {
    const failPeople = stages.filter((people) => people === i).length;
    const failure = failPeople / people;
    people -= failPeople;
    temp.push([i, failure]);
  }

  const result = temp.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return b[1] - a[1];
  });

  return result.map((a) => a[0]);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
