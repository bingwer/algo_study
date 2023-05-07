function solution(babbling) {
  let answer = 0;

  const availableWords = ['aya', 'ye', 'woo', 'ma'];

  for (item of babbling) {
    let tempLength = 0;
    for (let word of availableWords) {
      if (item.includes(word)) {
        tempLength += word.length;
      }
    }
    if (item.length === tempLength) answer++;
  }
  return answer;
}

console.log(solution(['aya', 'yee', 'u', 'maa', 'wyeoo']));
