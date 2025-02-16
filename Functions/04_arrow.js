const user = {
    username : "Rishi",
    price : 999,
    

    welcomeMessage : function () {
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai () {
//     let username = "Rishi"
//     console.log(this.username);
// }

chai()

// let chai = function () {
//     let username = "Rishi"
//     console.log(this.username);
// }


const chai = () => {
    let username = "Rishi"
    console.log(this);
}


// chai()


// Arrow function

// const addTwo = (num1 , num2) => {
//      return num1 + num2
// }

// const addTwo = (num1 , num2) => num1 + num2

// const addTwo = (num1 , num2) => (num1 + num2)

const addTwo = (num1 , num2) => ({username : "Rishi"})

console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

