function sayMyname() {
  //     console.log("R");
  //     console.log("I");
  //     console.log("S");
  //     console.log("H");
  //     console.log("I");
}


sayMyname();

function addTwoNumbers(number1, number2) {

  console.log(number1 + number2);
}

function addTwoNumbers(number1, number2) {

  // let result = number1 + number2
  // return result
  return number1 + number2;
}

const result = addTwoNumbers(3, 4);

console.log("Result : ", result);

function loginUserMessage(username = "sam") {

  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("rishi"));
