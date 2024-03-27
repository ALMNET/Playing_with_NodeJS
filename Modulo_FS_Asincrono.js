const fs = require('fs');

// Los procesos asíncronos se realizan después de los procesos
// síncronos


// Este código es una secuencia de 

// 1.- Crear archivo
// 2.- Renombrar archivo
// 3.- Leer archivo
// 4.- Re-Renombrar archivo
// 5.- Agregar texto a un archivo 
// 6.- RE-Leer un archivo
// 7.- Elimnar un archivo
// 8.- RE-Crear o escribir un archivo 

///////////////////////////////////////////////////////////////////
//////////////////// Crear o escribir un archivo //////////////////
///////////////////////////////////////////////////////////////////

console.log("1.- Antes de crear el archivo");

fs.writeFile('index.html', 'contenido nuevo', (err) => 
{
    if(err)
    {
        throw err;
    }

    console.log("Contenido reemplazado");
});

console.log("1.- Despues de crear el archivo");


///////////////////////////////////////////////////////////////////
///////////////////// Renombrar un archivo/////////////////////////
///////////////////////////////////////////////////////////////////

console.log("2.- Antes de renombrar el archivo");
fs.rename('index.html', 'main.html', (err) => {
    if(err)
    {
        throw err;
    }

    console.log("Nombre actualizado");
});


console.log("2.- Despues de renombrar el archivo");

///////////////////////////////////////////////////////////////////
///////////////////////// Leer un archivo /////////////////////////
///////////////////////////////////////////////////////////////////

console.log("3.- Antes de leer el archivo");

fs.readFile('main.html', 'utf-8', (err, contenido) => {
    if(err)
    {
        // console.log(err);
        throw err;
    }
    // else
    // {
    //     console.log(contenido);
    // }
    
    console.log(contenido);
    // console.log("Mensaje...");
});

console.log("3.- Despues de leer el archivo");

///////////////////////////////////////////////////////////////////
/////////////////// RE - Renombrar un archivo//////////////////////
///////////////////////////////////////////////////////////////////

console.log("4.- Antes de RE-renombrar el archivo");

fs.rename('main.html', 'index.html', (err) => {
    if(err)
    {
        throw err;
    }

    console.log("Nombre actualizado");
});

console.log("4.- Despues de RE-renombrar el archivo");

///////////////////////////////////////////////////////////////////
//////////////////// Agregar texto a un archivo ///////////////////
///////////////////////////////////////////////////////////////////

console.log("5.- Antes de agregar texto al archivo");

fs.appendFile('index.html', '<p>Hola</p>', (err) => 
{
    if(err)
    {
        throw err;
    }
    console.log("Mensaje agregado");
})

console.log("5.- Despues de agregar texto al archivo");

///////////////////////////////////////////////////////////////////
/////////////////////// RE-Leer un archivo ////////////////////////
///////////////////////////////////////////////////////////////////

console.log("6.- Antes de RE-leer el archivo");

fs.readFile('index.html', 'utf-8', (err, contenido) => {
    if(err)
    {
        // console.log(err);
        throw err;
    }
    // else
    // {
    //     console.log(contenido);
    // }
    
    console.log(contenido);
    // console.log("Mensaje...");
});

console.log("6.- Despues de RE-leer el archivo");

///////////////////////////////////////////////////////////////////
////////////////////// Elimnar un archivo /////////////////////////
///////////////////////////////////////////////////////////////////

console.log("7.- Antes de Eliminar el archivo");

fs.unlink('index.html', (err) => 
{
    if(err)
    {
        throw err;
    }

    console.log("Archivo eliminado");
});

console.log("7.- Despues de Eliminar el archivo");


///////////////////////////////////////////////////////////////////
////////////////// RE-Crear o escribir un archivo /////////////////
///////////////////////////////////////////////////////////////////

console.log("8.- Antes de RE-crear el archivo");

fs.writeFile('index.html', 'contenido nuevo', (err) => 
{
    if(err)
    {
        throw err;
    }

    console.log("Contenido reemplazado");
});

console.log("8.- Despues de RE-crear el archivo");
