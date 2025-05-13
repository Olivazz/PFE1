//3
function factorial(n) {
    var numero = prompt ("Digte um número para mostrar o resultado dele fatorial.")
    (numero * (numero-1));
    console.log (numero);
}
factorial(); 

//4
function countDown(n) {
    if (n <= 0) {
        return n;
    }
    else {
        console.log(n);
        return countDown(n-1);
    }
}

console.log(countDown(2));
