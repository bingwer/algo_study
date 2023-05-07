const walkPoint = {
  n: [0, 1],
  s: [0, -1],
  w: [-1, 0],
  e: [1, 0],
};

function isValidWalk(walking) {
  const base = [0, 0];
  if (walking.length !== 10) return false;
  for (let walk of walking) {
    base[0] += walkPoint[walk][0];
    base[1] += walkPoint[walk][1];
  }

  return base[0] === 0 && base[1] === 0 ? true : false;
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
