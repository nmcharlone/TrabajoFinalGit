//Math.floor(Math.random()* (max-min+1))+min

let min = 1;
let max = 10;
let tamaño = 50;
let numeros = [];
numRandom();
for(let i=0;i<numeros.length;i++){
        console.log(numeros[i]);
}



min = 1000000;
max = 9999999;
tamaño = 20;
let dnis = [];
numRandom();
for(let i=0;i<numeros.length;i++){
        console.log(numeros[i]);
}



//Cargar un array de 50 números aleatorios.
function numRandom(){
    
    for(let i=0;i<tamaño;i++){
        numeros[i]=Math.floor(Math.random() *(max-min+1))+min;
    }
}
//Cargar un array de 50 números aleatorios.
function numRandom(){
    
    for(let i=0;i<50;i++){
        numeros[i]=Math.floor(Math.random() *(10-1+1))+1;
    }
}