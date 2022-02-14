/* I have an An Array represented with a Variable "Smart"
In this Array there are 10 names.
Write a code to print each of these names Twice in <li> arrangement. */

const smart = ['Daudu', 'Emma', 'Skodo', 'John', 'Jones', 'Mike', 'Sierra', 'Oscar', 'Alpha', 'Bravo'];

for (const item of smart) {
    console.log(`${item}, ${item}`);
}

or

const smart = ['Daudu', 'Emma', 'Skodo', 'John', 'Jones', 'Mike', 'Sierra', 'Oscar', 'Alpha', 'Bravo'];

const newSmart = smart.map((item) => `${item}, ${item}`);
//Creates a new array and does the same thing in the first code
for (const item of newSmart) {
    console.log(item);
} 