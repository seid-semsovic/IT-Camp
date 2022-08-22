//Write a C program to check whether a triangle is Equolateal, Isosceles or Scalene
//Test data: 50 50 60
//Expected output:Thisis an isosceles truangle
// ------------------------------------TRIANGLE-------------------------------------------------------------------
a = prompt(
  "Enter the length of the first of the 3 angles to form a regular triangle: "
);
b = prompt("Enter the length of the first: ");
c = prompt("Enter the length of the second: ");
if (a === b && a === c && b === c) {
  console.log("Triangle is successful!");
} else {
  console.log("Triangle is not correct try again!");
}
