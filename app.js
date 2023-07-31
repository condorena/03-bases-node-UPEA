/*
importamos o llamamos la funcion para crear 
archivos, ver documentacion
 */

const fs=require('fs');

//aplicamos desestructuracion
const{crearArchivo}=require('./helpers/multiplicar');
// en este punto invocamos a yargs
//paso al archivo yargs
const argv=require('./config/yargs');
const color=require('colors'); //importando colores

console.clear();

/*console.log(process.argv);
console.log(argv);
console.log('base:yargs', argv.b);

*/

//argumentos que vienen desde la consola
//console.log(process.arg);
//realizamos una desetructuracion

/*const[,,arg3='base=5']=process.argv;
//recibimos el valor y lo separamos con el split
const[,base=5]=arg3.split("=");

console.log(base);*/

//const base=1;
//crear bloc de notas
crearArchivo(argv.b,argv.l, argv.h)
.then(nombreArchivo=> console.log(
    nombreArchivo.rainbow,'creado'))

    .catch(err=>console.log(err));












/****************************************************** */
/*console.log("===========================");
console.log("Tabla del: 3");
console.log("===========================");
const base =4;
let salida='';


for(let i=1; i<=10; i++){

    salida+=(`${base}x${i}=${base*i}\n`);
}
console.log(salida);*/
/*
fs.writeFile(`tabla-${base}.txt`,salida, (err)=>{
    if(err) throw err;
    console.log(`tabla-${base}.txt creado`);
})*/

/*fs.writeFileSync(`tabla-${base}.txt`,salida);
console.log(`tabla-${base}.txt creado`);*/
