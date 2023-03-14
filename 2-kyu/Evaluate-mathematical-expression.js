// Instructions
// Given a mathematical expression as a string you must return the result as a number.

// Numbers
// Number may be both whole numbers and/or decimal numbers. The same goes for the returned result.

// Operators
// You need to support the following mathematical operators:

// Multiplication *
// Division / (as floating point division)
// Addition +
// Subtraction -
// Operators are always evaluated from left-to-right, and * and / must be evaluated before + and -.

// Parentheses
// You need to support multiple levels of nested parentheses, ex. (2 / (2 + 3.33) * 4) - -6

// Whitespace
// There may or may not be whitespace between numbers and operators.

// An addition to this rule is that the minus sign (-) used for negating numbers and parentheses will never be separated by whitespace. I.e all of the following are valid expressions.

// 1-1    // 0
// 1 -1   // 0
// 1- 1   // 0
// 1 - 1  // 0
// 1- -1  // 2
// 1 - -1 // 2
// 1--1   // 2

// 6 + -(4)   // 2
// 6 + -( -4) // 10
// And the following are invalid expressions

// 1 - - 1    // Invalid
// 1- - 1     // Invalid
// 6 + - (4)  // Invalid
// 6 + -(- 4) // Invalid
// Validation
// You do not need to worry about validation - you will only receive valid mathematical expressions following the above rules.

// Restricted APIs
// NOTE: Both eval and Function are disabled.

function calc(expression) {
    const stack = [];
    let currentNumber = "";
    let operator = "+";
    let result = 0;
    let i = 0;
  
    while (i < expression.length) {
      const currentChar = expression[i];
  
      if (/\d|\./.test(currentChar)) {
        currentNumber += currentChar;
      }
  
      if (/[\+\-\*\/\(\)]/.test(currentChar) || i === expression.length - 1) {
        if (currentNumber !== "") {
          const number = Number(currentNumber);
          switch (operator) {
            case "+":
              stack.push(number);
              break;
            case "-":
              stack.push(-number);
              break;
            case "*":
              stack.push(stack.pop() * number);
              break;
            case "/":
              stack.push(stack.pop() / number);
              break;
          }
          currentNumber = "";
        }
        if (currentChar === "+" || currentChar === "-" || currentChar === "*" || currentChar === "/") {
          operator = currentChar;
        } else if (currentChar === "(") {
          stack.push(operator);
          operator = "+";
        } else if (currentChar === ")") {
          let sum = 0;
          while (typeof stack[stack.length - 1] === "number") {
            sum += stack.pop();
          }
          operator = stack.pop();
          switch (operator) {
            case "+":
              stack.push(sum);
              break;
            case "-":
              stack.push(-sum);
              break;
            case "*":
              stack.push(stack.pop() * sum);
              break;
            case "/":
              stack.push(stack.pop() / sum);
              break;
          }
        }
      }
      i++;
    }
  
    while (stack.length) {
      result += stack.pop();
    }
  
    return result;
  }
  
  
  
  
  
  
  