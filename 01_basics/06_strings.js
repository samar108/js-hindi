let name = "samarjeet";

let surname = " thakur"

console.log(name + surname);  

console.log(`hello my name is ${name} and lastname is ${surname}`);

const gameName = new String('  samarjeet-hero');

console.log(gameName.charAt(3));
console.log(gameName.length);
console.log(gameName.indexOf('m'));

const newString = gameName.trim()

const url = "https://samar.com/samar%434thakur"

const newurl = url.replace("samar" , "jeet");
console.log(newurl);
console.log(newurl.includes("rerw"));
console.log(newurl.split("/"))
console.log(newString);
console.log(gameName.slice(3, 4));
