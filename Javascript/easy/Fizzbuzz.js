export const FizzBuzz=(n)=>{
    for(let i =0; i <=n; i++){
        if(i % 15 === 0) return console.log("FizzBuzz");
        else if( i % 3 === 0) return console.log("Fizz");
        else if( i % 5 === 0) return console.log("Buzz");
        else console.log(i);
    }

}