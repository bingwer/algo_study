function solution(answers) {
  const peopleAnswers = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const correctAnswer = new Map();

  peopleAnswers.forEach((peopleAnswer, peopleIndex) => {
    answers.forEach((answer, answerIndex) => {
      if (answer === peopleAnswer[answerIndex % peopleAnswer.length]) {
        if (correctAnswer.has(peopleIndex + 1)) {
          correctAnswer.set(
            peopleIndex + 1,
            correctAnswer.get(peopleIndex + 1) + 1
          );
        } else correctAnswer.set(peopleIndex + 1, 1);
      }
    });
  });

  const answer = [];

  let max = 0;

  [...correctAnswer.entries()].forEach(([people, correct]) => {
    if (correct > max) max = correct;
  });

  if (max === 0) return [1, 2, 3];

  [...correctAnswer.entries()].sort().forEach(([people, correct]) => {
    if (max === correct) answer.push(+people);
  });

  return answer;
}
