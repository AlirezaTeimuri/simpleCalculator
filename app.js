

/*
today is 04.03.2024 Monday
let num = 42;
let firstName = "Alireza";
const isProgrammer = true;
alert(firstName)
console.log(firstName)
*/

const resultElement = document.getElementById("result");
const input1Element = document.getElementById("input1");
const input2Element = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
let action;

const sum = Number(input1Element.value) + Number(input2Element.value);
resultElement.textContent = sum;

// console.log(resultElement.textContent)
// console.log(typeof sum)

plusBtn.onclick = function () {
  action = "+";
  checkAction(action)
};

minusBtn.onclick = function () {
  action = "-";
  checkAction(action)
};

multiplyBtn.onclick = function () {
  action = "*";
  checkAction(action)
};

divideBtn.onclick = function () {
  action = "/";
  checkAction(action)
};

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = "red";
    // resultElement.style.textShadow = "0 0 3px white"
  } else {
    resultElement.style.color = "green";
  }
  resultElement.textContent = result;
}

function checkAction (actn) {
   
    if (actn == "+") {
        plusBtn.style.backgroundColor = "orange"
    } else{
        plusBtn.style.backgroundColor = "green"
    } 
    if(actn == "-") {
        minusBtn.style.backgroundColor = "orange"
    } else {
        minusBtn.style.backgroundColor = "red"
    } 
    if(actn == "*") {
        multiplyBtn.style.backgroundColor = "orange"
    } else {
        multiplyBtn.style.backgroundColor = "green"
    } 
    if(actn == "/") {
        divideBtn.style.backgroundColor = "orange"
    }else {
        divideBtn.style.backgroundColor = "red"      
    }
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);
if (actionSymbol == "+") {
    return num1 + num2
} else if(actionSymbol == "-") {
    return num1 - num2
} else if(actionSymbol == "*") {
    return num1 * num2
} else {
    return num1 / num2
}

//   return actionSymbol == "+" ? num1 + num2 : num1 - num2;
}

submitBtn.onclick = function () {
  const result = computeNumbersWithAction(input1Element, input2Element, action);
  printResult(result);

  //   if (action == "+") {
  //     const sum = Number(input1Element.value) + Number(input2Element.value);
  //     printResult(sum)
  //   } else {
  //     const sum = Number(input1Element.value) - Number(input2Element.value);
  //     printResult(sum)
  //   }
};
