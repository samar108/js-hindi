var c = 200   // global scope

let a = 530

if(true){
    let a = 10
    console.log("inner" , a);
    const b = 32
    var c = 24      // aboud var for scope 
}

// console.log(a);
// // console.log(b);
// console.log(c);

function one(){
    const username = "yujraj"

    function two() {
        const website = "youtube"
        console.log(username);
        
    }

    // console.log(website);   child can access parent bur parent can't 

    two()
}

one()