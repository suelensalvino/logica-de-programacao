/*Computar o Índice de Massa Corporal e classificar o resultado entre magreza (inferior a 18.5), 
saudável (entre 18.5 e 25), sobrepeso (acima de 25)*/

var altura = 1.70
var peso = 55
var imc = peso / (altura ** 2)

if(imc < 18.5){
    console.log("magreza")
} else if(imc > 18.5 && imc < 25){
    console.log("saudável")
} else {
    console.log("sobrepeso")
}