//1
function validateNumber(n) {
    var numero = prompt ("Digite seu numero.") ;
    if (typeof numero === Number){
        console.log("É um Número !")
    }
    else {
        console.log("Não é um número !")
    }
}
validateNumber();

//2
function validateUser(name, age) {
    var nome = prompt ("Digite o seu nome.");
    if (typeof nome == null){
        console.log("Seu nome é inválido.")
    }
    else {
        console.log("Seu nome é válido.")
    }
    var idade = prompt ("Digite a sua idade");
    if (idade === 0){
        console.log("sua idade é inválida")
    }
    else {
        console.log("Sua idade é inválida")
    }
}