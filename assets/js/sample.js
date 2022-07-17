const milkSheds = [
    "A",
    "B",
    "C",
    "D"
];

const amountOfMilkPerDay = [
    {
        shed: "A",
        amount: 20 
    },
    {
        shed: "A",
        amount: 20 
    },
    {
        shed: "A",
        amount: 20 
    },
    {
        shed: "A",
        amount: 20 
    },
    {
        shed: "B",
        amount: 20 
    },
    {
        shed: "B",
        amount: 20 
    }
]

// variables
let totalShedA =510;
let totalShedB= 308;
let totalShedC= 486;
let totalShedD= 512;

let totalLit = 1876; // total amount of milt per day in all sheds

// function that calculate the totalamount
function totalProduction(){
    //let milkFromShedA= amountOfMilkPerDay.map( i => i.shed === "A");
    //milkFromShedA.map( i => totalshedA = totalShedA + i.amount);

    //shed b
   // let milkFromShedB= amountOfMilkPerDay.map( i => i.shed === "B");
    
   // milkFromShedB.map( i => totalshedB= totalShedB + i.amount);


    console.log(`Your production in Shed A ${totalShedA} liters per day`);
    console.log(`Your production in Shed B ${totalShedB} liters per day`);


    // total for all sheds
    totalLitres = totalShedA + totalShedB+totalShedC+totalShedD;

    console.log(`Your total production is ${ totalLitres} liters per day`);


}
totalProduction();
function incomeOverTime(totalLits=1876,rate = 45, time=7){
    let weeklyProduction = totalLits*rate * time
    console.log(`Your total weekly production is ${weeklyProduction} liters per day`);
}
incomeOverTime();
function incomeOverTime2(totalLits=1876,rate = 45, time=365){
    let yearlyProduction = totalLits*rate * time
    console.log(`Your total Yearly production is ${yearlyProduction} liters per day`);
}

incomeOverTime2();
function leapYearTotals(){
    //total amount of milt in all sheds
   let totalLitresProd = 1876;

    let months = [
       {
            month:"January",
            days: 31,
            amount:  totalProduction(45 , 31) // jan
       },
        {
            month:"February",
            days: 29,
            amount: totalProduction(45 , 29) // feb
        },
       {
            month:"December",
            days: 31,
            amount: totalProduction(45 , 31) // feb
       },

   ]

    let rowsElement = document.get.getElementById("rows");
    print
    months.map( i => {
        rowsElement.append(`<tr>
        <td>${i.month}</td>
        <td>${totalLitresProd}</td>
        <td>${i.days}</td>
        <td>${i.amount}</td>
   </tr>`)
   })

}





