// const tinderUser = new Object()

const tinderUser = {

}
tinderUser.id = "2343"
tinderUser.name = "samar"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "some@gamil.com",
    userfullname: {
        fullname: {
            firstName: "virat",
            lastName: "kohli"
        }
    }
}
// console.log(regularUser.firstName.fullname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}

// const obj3 = { obj1 , obj2}
// const obj3 = Object.assign({} , obj1 , obj2)
const obj3 = {...obj1 , ...obj2}
console.log(obj3)

const course = {
    coursename: "js in hindi",

}
const {coursename: x} = course

// console.log(coursename)
console.log(x);

// const navbar = ({company}) => {
                                         // in react it is done like that
// }
// navbar(company = "google")

// {
//     "name": "samar",
//     "coursename": "js in Hindi"
// }
