/*
1. Mostrar los números del 1 al 10 utilizando una función y un bucle.
2. Mostrar los números pares del 1 al 20.
*/

//ejercicio 1
//mostrarMultiplos(1,10);
//ejercicio 2
//mostrarMultiplos(2,20);



function mostrarMultiplos(numero, limite){
    console.log("Multiplos de "+numero+" hasta "+limite);
    for(let i=1;i<=limite;i++){
        if (multiplo(i,numero)){
            console.log(i);
        }
    }
}

function multiplo(num1,num2){
    if (num1%num2===0) return true;
    else return false;
}