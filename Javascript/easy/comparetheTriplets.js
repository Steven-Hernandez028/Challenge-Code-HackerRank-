export const compareTheTriplets =(a,b)=>{
    let total = [], al = 0,bob = 0;
    for(let i=0; i<=a.length-1; i++){
        if(a[i] > b[i]){
            al++;
        }
        if(b[i]>a[i]){
            bob++;
        }
    }
    total.push(al,bob);
    return total;
    
}