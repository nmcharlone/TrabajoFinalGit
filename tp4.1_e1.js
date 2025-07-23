//Escribí un programa que muestre por consola la tabla de multiplicar del 1 al 10

let tabla = "";
for (let i = 1; i <=10; i++){
    for (let j=1; j<=10; j++){
        tabla += i + " x " + j + " = " + (i * j) + "\n";        
    }
    tabla += "\n" ; 
}
console.log(tabla);

//Parte 1.1 Mostrar los números del 1 al 10 utilizando una función y un bucle. 

const numeros = function numeros() {
    let salida = "";
for (let i = 1; i <=10; i++){
        salida +=i + "\n";
    } 
    console.log(salida);
}
numeros()

//Mostrar los números pares del 1 al 20. 
const pares = function pares (){
    for (let i = 1; i<= 20;i++){
        if (i %2=== 0){
            console.log(i);
        }
    }
}
pares();

//3. Mostrar los elementos de un arreglo de nombres dentro de la función. 
/*🔁 Regla de oro:
Los arrays en JavaScript van desde 0 hasta length - 1, nunca uses <= en un for para recorrer un array.*/

let nombres = ["Juan", "Sofía", "Maria", "Elena", "Norma", "Lucas","Maxi", "Nahuel", "Tómas"];
function recorrernombres(){
    let R = "";
    for (let i =0; i < nombres.length; i++){
        R += nombres[i] + "\n";
    }
    return R; 
}
console.log(recorrernombres());

//4. Mostrar la suma de los números del 1 al 100. 

function suma(){
    let salida = 0;
    for (let i = 1; i <= 100; i++){
        salida += i ;
    }
    return salida;
}
console.log(suma());

//Calcular el promedio de un arreglo de 5 números. 
let narray = [2,4,6,8,10];
function promedio(){
    let suma = 0;
    for (let i = 0; i < narray.length; i++){
        suma += narray[i];
    }
    return promedio = suma/narray.length; 
}
console.log(promedio());

//6. Contar cuántos números pares hay en un arreglo. 
 let narraya= [1,2,3,4,5,6,7,8,9,10,12,14,16];
 function contarpares(){
    let pares= 0;
    for (let i =0; i < narraya.length; i++){
        if (narraya[i] % 2 === 0){
            pares ++;
        }
    }
    return pares;
 }
console.log(contarpares());

//7. Mostrar el mayor número de un arreglo definido dentro de la función. 
function Mayor(){
    let array = [1,23,45,56,78,90];
    let mayor = 0;
    for (let i = 0; i < array.length; i++){
        if(mayor< array[i]){
            mayor = array[i];
        }
    }
    return mayor
}
console.log(Mayor()); 

//8. Crear un arreglo de 10 números y mostrar solo los mayores a 5. 
let n10= [1,20,24,3,6,7,2,12,4,9];
function mayorescinco(){
    let n5mayores= [];
    for (let i = 0; i < n10.length; i++){
        if (n10[i] >5){
            n5mayores += n10[i]+ " ";
        }
    }
    return n5mayores; 
}
console.log(mayorescinco()); 

//9. Contar cuántas veces aparece un número específico dentro de un arreglo. 
let n11= [1,12,3,5,6,1,7,1,24,1,9,1,10];
function contarespecifico(){
    let contar = 0;
    for (let i =0; i <n11.length; i++){
        if (n11[i] === 1){
            contar++;
        }
    }
    return contar;
}
console.log(contarespecifico());

//10. Mostrar los números del 10 al 1 (en orden descendente). 
function contarhastauno(numero){
    if (numero === 1){
        console.log("Llegamos a " + 1+ "!");
    }else {
        console.log(numero);
        contarhastauno(numero -1);
    }
}
contarhastauno(10);

/*Parte 2: Ejercicios con Lógica Combinada 
11. Crear un arreglo de 10 números. Calcular la cantidad de números positivos, 
negativos y ceros. */
let narrays= [-4,-3,-2,-1,10,1,2,3,4,5];
function npceros(){
    let positivos = 0;
    let negativos= 0;
    let ceros = 0;
    for (let i = 0; i < narrays.length; i++){
        if (narrays[i]=== 0){
            ceros++;
        } else if(narrays[i]<0){
            negativos++;
        }else if (narrays[i]>0){
            positivos++;
        }
    }
console.log(`Hay ${positivos} positivos, ${negativos} negativos y ${ceros} ceros `)
}
npceros();

//12. Mostrar los elementos de un arreglo y al mismo tiempo indicar si son pares o impares.
function paresoimpares(arr){
    let pares = [];
    let impares = [];
    for (let i = 0; i<arr.length; i++){
        if (arr[i]%2 ===0){
            pares.push(arr[i]);
        } else {
            impares.push(arr[i]);
        }
    }
    console.log(`Los pares del arrays son ${pares.join(", ")} y los impares ${impares.join(", ")}`);
}
paresoimpares(narrays);

//13. Simular una contraseña guardada en la función y pedir al usuario que intente adivinarla (máximo 3 intentos). 
var prompt = require('prompt-sync')();
//let contra= prompt("Ingrese su contraseña ")
//let contraseña1 = "1234";
/*function contraseña(){
    var contra= prompt("Ingrese su contraseña ")
    let contraseña1 = "1234";
    for (let i = 1; i <=3; i++){
    if (contra === contraseña1){
        console.log("Tu contraseña es correcta");
        break;
    }else {
        console.log("Tu contraseña es incorrecta");
        var contra= prompt("Ingrese su contraseña nuevamente ");
    }
    }
}
contraseña();*/

//14. Simular un carrito de compras. Dentro de la función hay precios de productos, mostrar el total de la compra.
let carrito = ["yerba", "azucar", "dulce_de_leche"];
//let carrito1 = prompt("Ingrese los productos ");
function carritodecompras(carr){
    let total = 0;
let productos = {
    yerba: 2500,
    azucar: 2100,
    fideos: 1800,
    arroz: 900,
    papel_higenico: 600,
    cafe: 3200,
    mermelada: 500,
    dulce_de_leche: 2200
};
for (let i = 0; i < carr.length; i++){
   total += productos[carr[i]];
    }
return total 
}
console.log(carritodecompras(carrito))

//15. Crear una tabla de multiplicar del 1 al 10 (por ejemplo: 1x1 hasta 10x10).
let a = 10;
function tablamultiplicar(){
    let multi = "";
    for (let i = 1; i <= 10; i++){
        for (let j = 1; j <= 10; j++ ){
            multi += i +" x "+ j + " = "+ i * j + "\t" ;
        }
        multi += + "\n";
    }
    return multi;
}
console.log(tablamultiplicar());