// Conversion - seer to mon 

function seerToMon(seer) {
  
  /*--------- Error control---------------*/
  if(typeof seer == 'string' || seer < 0) {
    return 'Error! Please give a positive number';
  }

  
  const mon = seer / 40;
  return mon;
}

let result = seerToMon(800);
console.log(result);



// Console total amount of sale

function totalSales(amountOfShirts, amountOfPants, amountOfShoes) {
  const perShirtPrice = 100;
  const perPantPrice = 200;
  const perShoePrice = 500;

    /*--------- Error control---------------*/
    if((typeof amountOfShirts == 'string' || amountOfShirts < 0) || (typeof amountOfPants == 'string' || amountOfPants < 0) || (typeof amountOfShoes == 'string' || amountOfShoes < 0)) {
      return 'Error! Please give a positive number';
    }


  let totalShirtPrice = amountOfShirts * perShirtPrice;
  let totalPantPrice = amountOfPants * perPantPrice;
  let totalShoePrice = amountOfShoes * perShoePrice;
  let totalSalePrice = totalShirtPrice + totalPantPrice + totalShoePrice;
  return totalSalePrice;
}

let sumOfSale = totalSales(10, 50, 20);
console.log(sumOfSale);





// Calculate the delivery cost

function deliveryCost(amountOfTshirt) {
  const zeroTo100Price = 100;
  const oneHundredTo200Price = 80;
  const over200Price = 50;

  /*--------- Error control---------------*/
  if(typeof amountOfTshirt == 'string' || amountOfTshirt < 0) {
    return 'Error! Please give a positive number';
  }


  if(amountOfTshirt <= 100) {
    let totalPrice = amountOfTshirt * zeroTo100Price;
    return totalPrice;
  }
  else if(amountOfTshirt <= 200) {
    let first100Price = 100 * zeroTo100Price;
    let restTshirt = amountOfTshirt - 100;
    let restTshirtPrice = restTshirt * oneHundredTo200Price;
    let totalPrice = first100Price + restTshirtPrice;
    return totalPrice;
  }
  else {
    let first100Price = 100 * zeroTo100Price;
    let second100Price = 100 * oneHundredTo200Price;
    let restTshirt = amountOfTshirt - 200;
    let restTshirtPrice = restTshirt * over200Price;
    let totalPrice = first100Price + second100Price + restTshirtPrice;
    return totalPrice;
  }
}

let sumOfTshirtPrice = deliveryCost(500);
console.log(sumOfTshirtPrice);






// Console one friend name which carries length 5

function perfectFriend(names) {

  for(const getTheName of names) {
    
  /*--------- Error control---------------*/
  if(typeof getTheName == 'number' || typeof getTheName == 'object') {
    return 'Error! Please give a string';
  }


    const eachNameLength = getTheName.length;
    if(eachNameLength == 5) { 
    return getTheName;
    }   
  }
}

const allFriends = ['kowshik', 'masud' , 'semmon', 'nasim', 'iram', 'firoz', 'ajoy'];
const friendsName = perfectFriend(allFriends);
console.log(friendsName);