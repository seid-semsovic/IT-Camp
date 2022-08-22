//(18) Write a C program to calculate profit and loss on transaction.
//Test data:
//Expected Output:
//You can booled your profit amount: 200.
invesment = prompt("Enter the amount of money invested: ");
emolument = prompt("Enter the refund amount: ");
if (invesment < emolument) {
  console.log("You earned: " + (emolument - invesment) + ".rsd");
} else if (emolument < invesment) {
  console.log("You lost: " + (invesment - emolument) + ".rds");
} else {
  console.log("You have neither gained or lost anything.");
}
