export const timeConversion =(s)=>{
    const timeZone = s.slice(-2);
    const hours = Number(s.slice(0, 2));
    let time = s.slice(0, -2);
    if (timeZone === 'AM') {
        if (hours === 12) return  time.replace(s.slice(0, 2), '00');
     
        return time;
    } else if (timeZone === 'PM') {
        if (hours !== 12)      return time.replace(s.slice(0, 2), String(hours + 12));
      
        return time; 
    }
}