var num = Array.from("chihab ben hichem ben mohamed hajji")
.filter((c) => c != " ")
.map((c) => c.toLowerCase().charCodeAt(0));

var sum = 0;
for (var i = 0; i < num.length; i++) {
    sum += PythegorizeAscii(num[i]);
}

console.log(" FINAL : " + sum);

function PythegorizeAscii(n){
    return n < 106 ? n - 96 :  PythegorizeAscii(n - 9);
}
