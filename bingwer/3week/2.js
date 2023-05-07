function solution(lottos, win_nums) {
  const rank = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };

  let zeroNums = 0;
  let minMatch = 0;
  let maxMatch = 0;

  const lottosWithoutZero = lottos
    .filter((num) => {
      if (num === 0) {
        zeroNums += 1;
        return;
      } else {
        return num;
      }
    })
    .reduce((a, v) => ({ ...a, [v]: v }), {});

  win_nums.forEach((num) => {
    if (lottosWithoutZero[num] === num) minMatch += 1;
  });

  maxMatch = minMatch + zeroNums;

  return [rank[maxMatch], rank[minMatch]];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
