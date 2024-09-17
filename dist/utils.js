"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverse = reverse;
exports.multiply = multiply;
exports.dropRight = dropRight;
function reverse(array) {
    return array.slice().reverse();
}
function multiply(a, b) {
    return a * b;
}
function dropRight(array, n = 1) {
    return array.slice(0, -n);
}
