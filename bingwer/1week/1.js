function solution(ingredient) {
  let answer = 0;
  const hamburger = [];
  let idx1 = [1, 2, 3, 1];
  let score = 0;

  for (let i = 0; i < ingredient.length; i++) {
    hamburger.push(ingredient[i]);

    if (idx1[score] === ingredient[i]) {
      score++;
    } else {
      if (ingredient[i] === 1) score = 1;
      else score = 0;
    }

    if (score === 4) {
      answer++;
      hamburger.splice(hamburger.length - 4);
      switch (hamburger[hamburger.length - 1]) {
        case 1: {
          score = 1;
          break;
        }
        case 2: {
          if (hamburger[hamburger.length - 2] === 1) score = 2;
          else score = 0;
          break;
        }
        case 3: {
          if (
            hamburger[hamburger.length - 2] === 2 &&
            hamburger[hamburger.length - 3] === 1
          )
            score = 3;
          else score = 0;
          break;
        }
        default:
          score = 0;
      }
    }
  }

  return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
// 기존 수도코드의 반례
console.log(solution([1, 2, 1, 2, 3, 1, 3, 1, 2, 3, 1, 2, 3, 1]));
