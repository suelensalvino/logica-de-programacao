//Traduzir os pronomes (I, you, he, she, it, we e they) do Inglês para o Português

var pronome = prompt("Digite o pronome em Inglês que deseja traduzir")

if(pronome == "I"){
    console.log("I -> eu")
} else if(pronome == "you"){
  console.log("you -> você")
} else if(pronome == "he"){
  console.log("he -> ele")
} else if(pronome == "she"){
  console.log("she -> ela")
} else if(pronome == "it"){
  console.log("it -> ele/ela")
} else if(pronome == "we"){
  console.log("we -> nós")
} else if(pronome == "they"){
    console.log("they -> eles/elas")
}else {
console.log("Não consegui traduzir")
}