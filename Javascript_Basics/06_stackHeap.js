// Stack(Primitive), Heap(Non-Primitive)

let myName = "rishikumardotcom"

let anotherName = myName
anotherName = "chaiAurcode"

// console.log(myName);
// console.log(anotherName);

let userOne = {
    email : "rishi123@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "rk3421@google.com"

console.log(userOne.email);
console.log(userTwo.email);





