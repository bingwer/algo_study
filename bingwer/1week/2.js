// O(n)
function solution(n) {
  let answer = 0;

  while (n > 0) {
    if (n % 2 !== 0 && n % 3 !== 0 && n % 5 !== 0) answer++;
    n--;
  }

  return answer;
}

// O(1) - 수도 코드 방법
function solution2(n) {
  return (
    n -
    Math.floor(n / 2) -
    Math.floor(n / 3) -
    Math.floor(n / 5) +
    Math.floor(n / 6) +
    Math.floor(n / 10) +
    Math.floor(n / 15) -
    Math.floor(n / 30)
  );
}

console.log(solution2(10));
