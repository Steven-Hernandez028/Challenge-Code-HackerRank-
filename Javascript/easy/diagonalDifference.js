/*
@param []
 @return int
*/

export const diagonalDifference = (arr) => {
  let leftDiff = 0,
    rigthDiff = 0,
    total = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = 0; j <= arr.length - 1; j++) {
      if (i === j) leftDiff += arr[i][j];

      if (i + j === arr.length - 1) rigthDiff += arr[i][j];
    }
  }
  total = rigthDiff - leftDiff;

  if (total <= -1) return total * -1;
  return total;
};
