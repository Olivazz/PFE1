//5
function applyFunction(fn, value) {
    value = fn;
    return(value);
}
console.log(applyFunction());

//6
let operations = [
    (a, b) => a + b,
    (a, b) => 4 - b,
    (a, b) => 4 * b,
];

const num1 = 4;
const num2 = 2;
 
operations.forEach(operations => {
    const result = operations(num1, num2);
    console.log('Resultado: ${result}');
});