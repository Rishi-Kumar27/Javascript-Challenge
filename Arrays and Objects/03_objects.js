// singleton
// objrct.creation

//object literals

const mySym = Symbol("Key1")

const JsUser = {
    name : "Rishi",
    "full name" : "Rishi Kumar",
    [mySym] : "mykey1",
    age : 18,
    location : "Uttar Pradesh",
    email : "rishi@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log( JsUser[mySym]);

JsUser.email = "rishi@chatgpt.com"
// console.log(JsUser);
// Object.freeze(JsUser);

JsUser.email = "rishi@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}


JsUser.greetingTwo = function(){
    console.log(`Hello Js user , ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

 


