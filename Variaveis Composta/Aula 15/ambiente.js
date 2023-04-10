//F8 para exaecutar no terminal

let num = [5,8,2,9,3]

console.log(`nosso vetor é o ${num}`)

let numA =[5,8,'ola'] //<================================
numA[3] = 6 //Acrecenta mais um INDICE CHAVE [5,8,4,6] ==

console.log(numA[2]) //mostra o Terceiro valor

console.log(`mostra quantidades de elementos  da variavel numA = ${numA.length}`) // mostra quantidades de elementos

//

for (let pos = 0; pos < num.length; pos++) {
    console.log(`Aposição ${pos} tem o valor ${num[pos]}`)
}
 

//SIMPLIFICANDO FOR

for ( let pos in num){
    console.log( num[pos])
}


//

let posA = num.indexOf(9) //Colocar o valor no parenteses

console.log(`O valor 9 está na posição ${posA}`)
