const myFunction = function(){
    console.log("hello samarjeet");
} 


console.log(typeof myFunction);

let user = {
    name: "samar",
    id: 3443,
}

let user2 = user;
console.log(user.name);
console.log(user.id);         // primitive goes in stack 
                          // goes in heap