

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












