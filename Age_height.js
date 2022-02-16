/*Design a Simple Questionnaire System, that accepts Real Name, Surname, automatically calculate the Age, Height(by accepting Height in Meters and Converting it to Feet), and Do not allow the User Acces if User is Less than 18.*/
const name = prompt("What's your name, your first name to be precise?");
const name2 = prompt("What's your surname?");
let age = prompt("what year were you born?'");
var age2 = parseInt(age, 10);

function calc_age(){
	age = 2022 - age2;
	function agee(){
		if(age > 18){
			var height = prompt("What's your height in metres?");
		var height2 = parseInt(height, 10);
		height = height2 * 3.281;
		}else{
			return "You do not have access to go further. Wait till you're 18";
		}
		console.log("Your height in feet is " + height +  " and your name is " + name + ' ' + name2 + " and your age is " + age); 
	}
	return agee();
}

calc_age();