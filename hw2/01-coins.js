/** Exercise 01 - Coins **/

// Add your function here
function calculateChange(amount) {
  //check the amount
  if (amount > 100) {
    return 'Error: the number is too large';
  } else if (amount < 0) {
    return 'Error: the number is too small';
  }
  //convert the amount to cents
  let cents = Math.round(amount * 100);

  //array contain the coins values
  const coins = {
    dollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1,
  };
  //array to save the resutls
  let result = [];

  for (let coin in coins) {
    let count = Math.floor(cents / coins[coin]);
    if (count > 0) {
      result.push(`${count} ${coin}${count > 1 ? 's' : ''}`);
      cents %= coins[coin];
    }
  }
  return `$${amount} ==> ` + result.join(', ');
}

// Sample test cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(150.11));
// $150.11 ==> Error: the number is too large

// Add additional test cases here
console.log(calculateChange(-4));
