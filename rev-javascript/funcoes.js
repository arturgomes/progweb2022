// // tipo nomeDaFuncao(tipo parametros, tipo parametros2){
// //   // define conteudo da funcao.
// // }

// // function nomeDaFuncao(par1, par2){
// //   //define conteudo
// //   return par1 + par2
// // }
// // console.log(nomeDaFuncao(1,2))
// // console.log(nomeDaFuncao("Artur ", " Oliveira"))
// function soma(var1, var2 = 3, var3 = 4){
//   return var1 + var2 + var3
// }
// console.log("soma 1 parametro", soma(2))
// console.log("soma 2 parametros", soma(2, 5))
// console.log("soma 3 parametros", soma(2, 5, 7))

// function compAreaVolume(var1,var2 = 0,var3 = 0){
//   if(var2!=0 && var3!=0){
//     return var1*var2*var3 // retorna volume
//   }else if(var2!=0){
//     return var1*var2 //retorna area
//   }else{
//     return var1
//   }

// }
// console.log("compAreaVolume 1 parametro", compAreaVolume(2))
// console.log("compAreaVolume 2 parametros", compAreaVolume(2, 5))
// console.log("compAreaVolume 3 parametros", compAreaVolume(2, 5, 7))

// function minhaFun(){
//   let x = 10;
//   function imprimeX(){
//     console.log(x);
//   }
// }
// imprimeX()

// class minhaFun{
//   imprimeX(){
//     return "Artur"
//   }
// }
// let usuario = minhaFun()
// usuario.imprimeX();

function calculadora(var1,var2=undefined,var3=undefined){
  function comprimento(v1){
    return parseInt(v1)
  }
  function area(v1,v2){
    return v1*v2
  }
  function volume(v1,v2,v3){
    return v1*v2*v3
  }

  if(var2!=0 && var3!=0){
    return volume(var1,var2,var3) // retorna volume
  }else if(var2!=0){
    return area(var1,var2) //retorna area
  }else{
    return comprimento(var1)
  }

}