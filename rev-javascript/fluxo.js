// //laço 

// // for(let x = 0; x < 10; x++){
// //   console.log(x)
// // }
// // loop com while
// let y = 0
// while(y < 10){
//   console.log(y)
//   y++
// }
// // condicional com if
// if(10 < 11){
//   console.log("entrou 1")
// } else if( 11 < 12){
//   console.log("entrou 2")
// } else{
//   console.log("entrou 3")
// }

// // operador ternário

// // variavel = cond ? cond verdadeiro : cond falso
// let x = 10 < 11 ? "true" : "false"
// console.log(x)

// let y2 = 10 < 11 && "acertou"
// if(10<12) 
//   y2 = "novo"
// console.log(y2)
// console.log(novaar)

let vs = ["a","c","e"]
// for(let y = 0; y< vs.length; y++)
for(let y in vs){// pega indice
  console.log(vs[y])
}

for(let y of vs){ // pega valor
  console.log(y)
}
