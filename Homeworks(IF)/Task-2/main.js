//(13) Write a C program to read temperature in centigrade and dispplay a suitable message:
//acording to temperature state below:
//Temp <0 then Freezing weather
//Temp 0-10 then Very cold weather
//Temp 10-20 then Cold weather
//Temp 20-30 then Normal temp
//Temp 30-40 thenn its Hot
//Temp >= then it's very hot
//Test Data:
//42
//Expected output
//IT's very Hot
temp = prompt("Type the temperature to see what weather is outside.");
if (temp < 0) {
  console.log("It's freezing outside!");
}
if (temp >= 0 && temp <= 10) {
  console.log("It's very cold outside!");
}
if (temp > 10 && temp < 20) {
  console.log("It's cold");
}
if (temp >= 20 && temp < 30) {
  console.log("The temperature is normal.");
}
if (temp >= 30 && temp < 40) {
  console.log("Outside is hot.");
}
if (temp >= 40) {
  console.log("Outside is very hot!");
}
