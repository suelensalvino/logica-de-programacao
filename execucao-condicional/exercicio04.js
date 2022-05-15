/*Dados quatro notas, computar e classificar o valor da média das notas de um  estudante 
como aprovado (> 6), reprovado (< 4) e recuperação (caso contrário)*/

var n1 = 6
var n2 = 8
var n3 = 8
var n4 = 9

var media = (n1 + n2 + n3 + n4) / 4

if(media > 6){
    console.log("Aluno aprovado", "Média:", media)
} else if(media < 4){
    console.log("Aluno reprovado", "Média:", media)
} else {
    console.log("Recuperação", "Média:", media)
}