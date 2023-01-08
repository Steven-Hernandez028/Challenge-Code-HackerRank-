export const averybigsum=(arr)=>{
    let totalSum = arr.reduce((a,b)=>a+b);
    if(totalSum >2147483647) return 2147483647;
    if(totalSum <-2147483647) return -2147483647;
    return totalSum;
}

//2147483647