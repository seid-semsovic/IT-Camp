let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");
let action = prompt("+ - * / ");

// if (action === "+") {
//   add();
// } else if (action === "-") {
//   subb();
// } else if (action === "*") {
//   multi();
// } else if (action === "/") {
//   dev();
// } else {
//   console.log("Wrong input! Try Again!");
// }
switch (action) {
  case "+":
    add();
    break;

  case "-":
    subb();
    break;

  case "*":
    multi();
    break;

  case "/":
    dev();
    break;
  default:
    console.log("Wrong input! Try Again!");
}
function add() {
  console.log(num1 + num2);
}
function subb() {
  console.log(num1 - num2);
}
function multi() {
  console.log(num1 * num2);
}
function dev() {
  console.log(num1 / num2);
}
