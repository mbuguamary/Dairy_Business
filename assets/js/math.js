var a=510;
var b =308;
var c=486;
var d=572;
var total=1876
var days=365;
var weekDays=7;
var sh=45;


let sum=(a,b,c,d)=>
{    
    total =a+b+c+d;
    return total;
}
console.log(a+b+c+d);

let max=(total,weekDays,sh)=>{
total=total*weekDays*sh;
return total;
}

console.log(total*weekDays*sh);

let max1=(total,days,sh)=>{
    total=total*days*sh;
    return total;
    }
    console.log(total*days*sh);