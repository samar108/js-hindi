const greet = function(){
    console.log("hello samar");
}

greet()

function display(){
    console.log("how are you ?");
}
display()

// function add(number1 , number2){
//     console.log(number1 + number2);
// }

function add(number1 , number2){

    let result = number1 + number2
    console.log("my result is below")
    return result
     
}
const result = add(23 , 42) 

console.log(result);

function login(username = "dhoni"){
    if(username === undefined){
        console.log("please enter a username");
        return 
    }
    return (`${username} just logged in`)
}
console.log(login());
console.log(login("Virat kohli"));

function cart(val1 , val2 , ...num1){   // rest operator converts it into array
    return num1
}

console.log(cart(2 , 343, 53, 642, 64, 26));

const user = {
    username: "suresh raina",
    strikerate: 240
} 

function batsman(objectname){
    console.log(`username is ${objectname.username}`);
}

// batsman(user)
batsman({
    username: "sachin"
})

const arr = [ 323 , 43 ,5 , 54 ,64 , 235]

function returnvalue(anyvalue){
    return anyvalue[3]
}

console.log(returnvalue(arr));