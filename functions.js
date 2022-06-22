function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log(num);
}
function addAndHanle(n1, n2, cb) {
    var result = n1 + n2;
    var a = cb(result);
    debugger;
    console.log(a);
    return result;
}
// printResult(add(1,2))
var combineValues;
combineValues = add;
var bro = combineValues(11, 22);
// console.log('bro:',bro)
addAndHanle(1, 2, function (res) {
    console.log(res);
    return res;
});
