let numbers = [2, 5, 12, 13, 15, 18, 22];
function isEven(num) {
  return num % 2 === 0;
}
let filtered = numbers.filter(isEven);
console.log(filtered + "は偶数です");
