import { reverse, multiply, dropRight } from "./utils";

const numbers = [ 1, 2, 3, 4, 5 ]
const reversedNumbers = reverse(numbers)
console.log(reversedNumbers)

const product = multiply(4, 5)
console.log(product)

const dropped = dropRight(numbers, 2)
console.log(dropped)