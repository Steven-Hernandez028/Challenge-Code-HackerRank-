export const plusMinus = (arr) => {
  let a= 0 ,b=0,c=0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] >= 1)a++;
    if (arr[i] <= -1) b++;
    if (arr[i] == 0) c++;
  }

  console.log((a / arr.length).toFixed(6));
  console.log((b/ arr.length).toFixed(6));
  console.log((c/arr.length).toFixed(6));
};
