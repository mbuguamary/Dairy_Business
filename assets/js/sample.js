// milk production from cows in each shed
const cowMilkPerDay = [
    {
      shed: "A",
      liters: 25,
    },
    {
      shed: "A",
      liters: 10,
    },
    {
      shed: "A",
      liters: 15,
    },
    {
      shed: "A",
      liters: 20,
    },
    {
      shed: "B",
      liters: 15,
    },
    {
      shed: "B",
      liters: 8,
    },
    {
      shed: "B",
      liters: 14,
    },
    {
      shed: "B",
      liters: 10,
    },
    {
      shed: "B",
      liters: 15,
    },
    {
      shed: "C",
      liters: 25,
    },
    {
      shed: "C",
      liters: 20,
    },
    {
      shed: "C",
      liters: 34,
    },
    {
      shed: "C",
      liters: 30,
    },
    {
      shed: "D",
      liters: 20,
    },
    {
      shed: "D",
      liters: 15,
    },
    {
      shed: "D",
      liters: 17,
    },
    {
      shed: "D",
      liters: 14,
    },
  ];
  // the selling price
  var sellingPrice = 45;
  
  //used to set the sale rate
  function setSellingPrice( selling_price){
      sellingPrice = selling_price;
  }
  
  // variables to hold totals
  var totalMilkInShedA = 0,
    totalMilkInShedB = 0,
    totalMilkInShedC = 0,
    totalMilkInShedD = 0,
    totalMilkInAllSheds = 0;
  
  //calculates total milk from a given shed
  function totalMilkFromShed(shed){
      let milkFromShed = cowMilkPerDay.filter( i => i.shed === shed);
      let totalMilk = 0
      for(let i = 0; i < milkFromShed.length; i++ ){ 
          totalMilk += milkFromShed[i].liters
      };
      return totalMilk;
  }
  
  //calculates total milk from each shed and all sheds
  function totalProduction() {
    // get total milk from each shed
    totalMilkInShedA = totalMilkFromShed("A");
  
    totalMilkInShedB = totalMilkFromShed("B");
  
    totalMilkInShedC = totalMilkFromShed("C");
  
    totalMilkInShedD = totalMilkFromShed("D");
  
    // get total
    totalMilkInAllSheds = totalMilkInShedA + totalMilkInShedB + totalMilkInShedC + totalMilkInShedD;
  
    return [
      { shed: "A", total: totalMilkInShedA },
      { shed: "B", total: totalMilkInShedB },
      { shed: "C", total: totalMilkInShedC },
      { shed: "D", total: totalMilkInShedD },
      { shed: "All", total: totalMilkInAllSheds },
    ];
  }
  
  // get income Over time
  function incomeOverTime(selling_price, time){
      return totalMilkInAllSheds * selling_price * time;
  }
  
  
  





