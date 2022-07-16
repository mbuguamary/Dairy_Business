var shedA=function(litres){
 console.log("your production in Shed A " + litres+" litres per day")
}
shedA(510);
var shedB=function(litres1){
    console.log("your production in Shed B " + litres1+" litres per day")
   }
   
   shedB(308);
   var shedC=function(litres2){
    console.log("your production in Shed C " + litres2+" litres per day")
   }
   shedC(486);
  
   var shedD=function(litres3){
    console.log("your production in Shed D " + litres3+" litres per day")
   }
   shedD(572);

   var totalProduction=function(totallitres){
    console.log("The total production is  " + totallitres+" litres per day")
   }
   totalProduction(1876);

    var totalincome=function (selling_price, time, totalProduction) {
    return selling_price * time*totalProduction;
    }

    console.log(totalincome(45,7,1876))


    var productin =(totalincome,time,selling_price)=>{
        return totalincome*time*selling_price;

    }

    console.log(productin(1876,365,45))
    
    

