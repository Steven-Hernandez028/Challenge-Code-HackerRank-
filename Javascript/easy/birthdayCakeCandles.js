export const birthdayCakeCandles = (candles)=>{
        let newCandles = candles.sort((a,b)=> b-a);
        let cont =1;
    for(let i =0; i<=newCandles.length -1; i++){
            if(newCandles[i] == newCandles [i+1]){
                    cont++;
            }
            else break;
    }

    return  cont;
}