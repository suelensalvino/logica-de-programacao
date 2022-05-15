//Testar se um número é divisível por 3 e por 4 (tente fazer usando apenas if’s)

var a = 12

if(a % 3 == 0){
    if(a % 4 == 0){
        console.log("O número é divisível por 3 e por 4")
    } else{
        console.log("O número é divisível apenas por 3")
    }
} else if(a % 4 == 0){
    console.log("O número é divisível apenas por 4")
} else{
    console.log("O número não é divisível por 3 nem por 4")
}