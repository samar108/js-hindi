const userLoggedIn = true   // assignment operator

                         // == , <= comparison operator

// if(userLoggedIn){

// }

if(2 == "2"){
    console.log("executed");   // will be executed as data type is not checked
}
if(2 === "2"){
    console.log("executed");        // will not be executed type is checked
}
const month = 3

switch (month) {
    case 1:
               console.log("no");
        break;
        case 3:
            console.log("yes");
        break;
        case 3:
            console.log("yes");
        break;
        case 4:
            console.log("no");
        break;

    default:
        console.log("no");
        break;
}

const email = "evdsf"

if(email){
    console.log("hi");
}else{
    console.log("no");
}
// ternary operator is below
const pizza_price = 100
pizza_price >= 100 ? console.log("pizza is expensive") :  console.log("pizza is not expensive")


// condition ? true : false ;   // anther way to write conditional statement

// loops 

// for (let index = 0; index <= 10; index++) {
//     console.log(index);
    
// // }
// const i = 1   // const can't be used here

// let i = 1;      // let ka use kr skte hain
// while (i < 10) {
//     console.log("hello samar");
//     i = i+1;
// }
// let score = 1
// do {
//     score = score + 1;
//     console.log(score);
// } while (score <= 10);
const arr = [1 ,3 , 53, 53 , 53,5 ,2]

// for(const num of arr){        // other way to use for loop 
//     console.log(num);
// }

for(const val of arr){        // other way to use for loop 
    console.log(val);
}

const map = new Map()

map.set("in"  , "india")
map.set("us"  , "america")

console.log(map);

for(const [key , value] of map){              // this is how we iterate maps
        console.log(key , ' -- ' , value);
}


const myobj = {
    js: "javascript",
    cpp: "c++"
}

for (const key in myobj) {
    console.log(myobj[key]);
}

const array = ["js" , "ruby" , "c++" , "python"]

// array.forEach(function (val) {
//     console.log(val);
// })

// array.forEach((item) => {
//     console.log(item);
// })

// const values = array.forEach((item) => {
//     console.log(item);
// })                                 
// console.log(values);

const mynums = [1 , 2 , 3,  4, 5 , 6 , 7 , 8 , 9 , 10]

// const newNums = mynums.filter((num) => {
//       return  num > 4                         // filter is used in this way
// })

// console.log(newNums);
const newNums = []
mynums.forEach( (num) => {
    if(num > 4){
       newNums.push(num)
    }
})
console.log(newNums);
// const userBooks = books.filter( (bk) => bk.genre === "history")
const array2 = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
const nn = array2.map((nums) => {
    return nums + 10;
})

console.log(nn);
 




