/*Daily Task:
              Write a Program that performs the job of a payment System. Accept the Account number, Amount and displays 5 real Banks [only if account number is Submitted]. The User can then type in the bank he wants to use, and then Pay.*/
var acct_num = prompt("Input your account number please.");
acct_num = parseInt(acct_num, 10);
const banks = ["UBA", "GtBank", "Access Bank", "Fidelity Bank", "Zenith Bank"];
var amount;
function process(){
	if (!acct_num){
		return;
	}else{
	console.log(banks);
	alert(banks.join('\r\n'))
	prompt( "Please select from the list. 0-4."); 

   for (const item of banks) 
{
   console.log(`${item}`)} 
	amount = prompt("Please input amount to be paid");
	amount = parseInt(amount, 10);
	} 
} 
process();