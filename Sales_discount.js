/*Write a price purchase system program where 30% is granted to the user if they purchase above the standard price of 30,000. */

const STD_PRICE = 30000;
const DISCOUNT = 0.3;
var x = prompt("How much do you intend to purchase");
var amount = parseInt(x, 10);

function calc_disc(amount) {
	if (amount > STD_PRICE ) {
	amount = amount - (STD_PRICE * 0.3);
	console.log(amount);
	} else {
		amount = STD_PRICE - amount;
	console.log(amount);
	}
}

calc_disc();