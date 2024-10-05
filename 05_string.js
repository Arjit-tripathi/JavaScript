//'',"" => using both symbol
const name = "arjit"
const repocount = 50

console.log(name+repocount+ "value");
//``=> Backtic
//string Interpolatio--n
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);


const gameName = new String('manoj');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);//length count karte hain kitne word hain

console.log(gameName.toUpperCase()); //string Uppercase main ho jayegi
console.log(gameName.charAt(2)); //second postion kon sa carecter hain ye check karte
console.log(gameName.indexOf('a'));



const newString = gameName.substring(0,2);//zero include hoga 2 nahi hoga
console.log(newString);
