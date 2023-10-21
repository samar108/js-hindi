const user = {
    username: "samar",
    price: 999,

    welcomemsg: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.username = "Rohit sharma"
// user.welcomemsg()

// console.log(this);

// function chai(){
//     let username = "Virat Kohli"
//     console.log(this);
// }
// chai()

const chai = () => {
    username: "Ben stockes"
    console.log(this.username);
}
chai()

// const add = (num1 , num2) => {
//     return num1 + num2
// }

// const add = (num1 , num2) =>  num1 + num2

// const add = (num1 , num2) => ( num1 + num2)

const add = (num1 , num2) => ({username: "samar"})


console.log(add(32 , 45));