

function dailyProduction() {
    var shedALitres = parseInt(document.getElementById("sheda").value);
    var shedBLitres = parseInt(document.getElementById("shedb").value);
    var shedCLitres = parseInt(document.getElementById("shedc").value);
    var shedDLitres = parseInt(document.getElementById("shedd").value);
    //

    var sum = shedALitres + shedBLitres + shedCLitres + shedDLitres


    alert("" + sum);
    // document.getElementById("add").innerHTML = "Sum is="+sum;
}
dailyProduction;
function WeeklyProduction() {
    var litres = parseInt(document.getElementById("litre").value);
    var sellingPrice = parseInt(document.getElementById("sprice").value);
    var days = parseInt(document.getElementById("days").value);

    var total = litres * sellingPrice * days;

    alert("" + total);
    //document.getElementById("result").innerHTML = "Sum is="+total;
}
WeeklyProduction();


//console.log(shedALitres+shedBlitres+shedClitres+shedDlitres);



function leapYearTotal(){
    //total amount of milt in all sheds
    let totalLitres = 1876;

    let months = [
        {
            month:"January",
            days: 31,
            amount:  totalLitres(45 , 31) // jan
        },
        {
            month:"February",
            days: 29,
            amount:  totalLitres(45 , 29) // feb
        },
        {
            month:"March",
            days: 31,
            amount:  totalLitres(45 , 31) // feb
        },
        {
            month:"April",
            days: 30,
            amount:  totalLitres(45 , 30) // feb
        },
        {
            month:"May",
            days: 31,
            amount:  totalLitres(45 , 31) // feb
        },
        {
            month:"June",
            days: 30,
            amount:  totalLitres(45 , 30) // feb
        },
        {
            month:"July",
            days: 31,
            amount:  totalLitres(45 , 31) // feb
        },
        {
            month:"August",
            days: 31,
            amount:  totalLitres(45 , 31) // feb
        },
        {
            month:"September",
            days: 31,
            amount:  totalLitres(45 , 31) // feb
        },
        {
            month:"November",
            days: 30,
            amount:  totalLitres(45 , 30) // feb
        },
        {
            month:"December",
            days: 31,
            amount:  totalLitres(45 , 31) // feb
        },


    ]

    let rowsElement = document.getElementById("rows");
    //print
    months.map( i => {
        rowsElement.append(`<tr>
        <td>${i.month}</td>
        <td>${total}</td>
        <td>${i.days}</td>
        <td>${i.amount}</td>
    </tr>`)
    })

}
leapYearTotal();







