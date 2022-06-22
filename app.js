"use strict";
var userInput;
var userName;
userInput = 5;
userInput = "max";
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var myErr = generateError('bro', 2);
console.log(myErr);
