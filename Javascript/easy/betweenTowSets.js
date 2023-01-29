

export const betweenTwoSets=(x,y)=>{
    let fc = 0
    const MIN = Math.min(...b);
    const MAX = Math.max(...a);
    let i = MAX;


    do{
        if(x.some(e=> i % e !== 0)) continue;
        if(y.every(e => e  % i === 0)) fc++;
        i++;
    }while(i<=MIN)
  
    
    return factors

}