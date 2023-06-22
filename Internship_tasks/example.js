const array1 = [10, 20, 30];
const array2 = [40, 50, 60];
const concatenatedArray = array1.concat(array2);

console.log(concatenatedArray);

const arrray1 = [10, 20, 30];
const arrray2 = [40, 50, 60];
arrray1.copyWithin(0, 0, arrray2.length);
console.log(arrray1);


const numbers = [1, 2, 3];
const repeatedNumbers = numbers.map(function(number) {
  return number * 10;
}).concat(numbers);
console.log(repeatedNumbers);


const num = [10, 20, 30, 40, 50, 60];
const allOdd = num.every(function(number) {
  return number % 2 !== 0;
});

console.log(allOdd);

const numb = [10, 20, 30, 40, 50, 60];
const allOddy = numb.some(function(numberr) {
  return numberr % 2 !== 0;
});

console.log(allOddy);