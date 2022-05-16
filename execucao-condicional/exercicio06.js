//Converter texto em um número inteiro (“um” -> 1, “dois” -> 2, até o número “cinco”)

var num = prompt("Digite um número de 1 a 5")

if(num == "zero"){
    console.log("zero ->", 0)
} else if(num == "um"){
  console.log("um ->", 1)
} else if(num == "dois"){
  console.log("dois ->", 2)
} else if(num == "tres"){
  console.log("três ->", 3)
} else if(num == "quatro"){
  console.log("quatro ->", 4)
} else if(num == "cinco"){
  console.log("cinco ->", 5)
} else {
console.log("O número não está na lista")
}