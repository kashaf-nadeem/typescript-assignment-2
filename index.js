// Create a function that takes an array, an index, and a value as parameters. 
// Inside the function, use the splice method to insert the value at the specified 
// index in the array. Return the modified array.
function insertValue(arr, index, value) {
    arr.splice(index, 0, value);
    return arr;
}
var arr = [1, 2, 3, 4, 5];
console.log("Original array: " + arr);
var modifiedArr = insertValue(arr, 2, 10);
console.log("Modified array: " + modifiedArr);
// Write a program that uses a while loop to print the first 25 integers.
var i = 1;
while (i <= 25) {
    console.log(i);
    i++;
}
// Write a program that uses a while loop to print the first 10 even numbers.
var i = 1;
while (i <= 10) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}
// Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
function factorial(num) {
    var result = 1;
    while (num > 0) {
        result *= num;
        num--;
    }
    return result;
}
console.log("Fatorial of 5: " + factorial(5));
// Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
var arr = [1, 2, 3, -4, 5, -6, 7, 8, -9, 10];
console.log("Original array: " + arr);
for (var i_1 = 0; i_1 < arr.length; i_1++) {
    if (arr[i_1] < 0) {
        arr.splice(i_1, 1);
    }
}
console.log("Modified array: " + arr);
// Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
function sumOfArray(arr) {
    var sum = 0;
    var i = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
}
var arr = [1, 2, 3, 4, 5];
console.log("Original array: " + arr);
console.log("Sum of array: " + sumOfArray(arr));
// Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
var celsiusTemperatures = [38, 37, 120, 43, 82];
var fahrenheitTemperatures = [];
i = 0;
while (i < celsiusTemperatures.length) {
    fahrenheitTemperatures.push((celsiusTemperatures[i] * 9 / 5) + 32);
    i++;
}
console.log("Celsius temperatures: " + celsiusTemperatures);
console.log("Fahrenheit temperatures: " + fahrenheitTemperatures);
