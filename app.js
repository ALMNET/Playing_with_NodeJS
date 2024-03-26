// console.log(process);
// console.log(process.env);

// [node, app.js, 6, 7]
//    0      1    2  3

// Ejemplo
// console.log(process.argv[2]);
// console.log(process.argv[3]);

let i;

for (i = 2; i < process.argv.length; i++)
{
    console.log(process.argv[i]);
}

