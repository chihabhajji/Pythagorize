const PythegorizeAscii = (n) => n < 106 ? n - 96 :  PythegorizeAscii(n - 9);
const digSum = (n) => n == 0 ? 0 : (n % 9 == 0) ? 9 : (n % 9);
var num = Array.from("chihab ben hichem ben mohamed hajji")
.filter((c) => c != " ")
.map((c) => PythegorizeAscii(c.toLowerCase().charCodeAt(0)))
.reduce((accumulator, curr) => accumulator + curr);

console.log(digSum(num));



