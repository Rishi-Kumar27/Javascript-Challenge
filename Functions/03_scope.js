// var c = 300
let a = 100
if(true){
    let a = 10
    const b = 20
    // console.log("INNER: ", a); 
}


// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Rishi"

    function Two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    Two()
    
}

// one()


if(true){
    const username = "rishi"

    if(username === "rishi"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
    
}

// console.log(username);


// hoisting basics

console.log(addOne(5));


function addOne(num){
    return num + 1
}

addTwo(5)

const addTwo = function addTwo(num){
    return num + 2
}

