// arr = [1,3,5,7,9]
//outut [16,24]
export const MiniMaxSum =(arr)=>{
        const newArray = arr.sort();
        let Mini = 0, Max = 0;
        let Total = [];
        for(let i =0; i<=newArray.length-2;i++){
            Mini += arr[i];
        }
        for(let j = 1; j<=newArray.length-1;j++){
            Max +=arr[j];
        }
        Total.push(Mini,Max)
        return Total;

}