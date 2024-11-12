let altura= parseFloat(prompt("digite a altura: "));
console.log(altura)
let peso=  parseFloat(prompt("digite o peso: "));
console.log(peso)
let imc

imc= (peso/(altura*altura))
 document.write(`o imc é igual a ${imc}`)