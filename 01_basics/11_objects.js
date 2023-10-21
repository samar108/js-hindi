// singleton

//object.create  is a way to create objects in javaScript

//object literals 
const mysym = Symbol("key1")

const JsUser = {
    name: "samarjeet",
    age: 21,
    city: "jaipuir",
    "full Name": "samarjeet Singh dangi",
    [mysym]: "mykey1",
    email: "samar@jeet@gamil.com",
    isLoggedIn: false,
    days: ["sunday" , "Saturday"]

}
console.log(JsUser.name);
console.log(JsUser["email"]);
console.log(JsUser["full Name"]);

console.log(JsUser[mysym]);

JsUser.name = "Rohit Sharma"
console.log(JsUser["name"]);

JsUser.greeting = function(){
    console.log("hello Js user !!")
}

JsUser.greeting2= function(){ 
    console.log(`hello Js user !! ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());