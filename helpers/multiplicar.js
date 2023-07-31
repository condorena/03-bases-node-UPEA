const fs=require('fs');
require('colors');
const crearArchivo=async(base=5, listar=false, hasta=10)=>{
    try{
        console.clear();

        let salida, consola='';
        for(let i=1; i<=hasta; i++){
            salida+=(`${base} X ${i} = ${base*i}\n`);
            consola+=(`${base} ${'X'.red} ${i} ${'= '.red} ${base*i}\n`);
        }  
        if(listar){
         console.log("===========================".green);
         console.log("Tabla del: ", base);
         console.log("===========================".green);
    
         console.log(consola);
        } 
        fs.writeFileSync(`tabla-${base}.txt`,salida);
        return `tabla-${base}.txt creado`; 
    }catch (error){

    }
}
/*
este codigo nos permite trabajar de forma global
y su sintaxis es la siguiente:
 */

module.exports={
    /*esto esta esta apuntando a crearArchivo esta llamando
    a crear archivo
    funcion:crearArchivo */
    crearArchivo
}