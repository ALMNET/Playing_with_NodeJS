
let i = 1;
// Funcion de base para ejemplos
function showTopic(topic)
{
    i++;
    console.log(`mostrando mensaje: ${topic}`)
}

// Funcion de base para ejemplos
function suma(a, b)
{
    console.log(a + b);
}

/**
 * @brief   delay básico (similar a un callback en C -> Higher-order Programming)
 * 
 * @param   function_name   Nombre de la función (sin sus argumentos)
 * @param   delay           cantidad de milisegundos absolutos (instante donde
 *                          tiene que arrancar la función)
 * @param   argumentos      todos los argumentos de la función
 */
// setTimeout(funcion_sin_argumentos, delay_ms, argumentos_de_la_funcion...);

// Ejemplo:
setTimeout(showTopic, 500,  "tu vieja");
setTimeout(showTopic, 1000, "tu vieja");
setTimeout(showTopic, 1500, "tu vieja");

setTimeout(suma, 2000, 5, 6, 7);



/**
 * @brief   Se utiliza para ejecutar código asíncrono en la próxima 
 *          iteración del ciclo de eventos (lo más pronto posible)
 * 
 * @param   function_name   Nombre de la función (sin sus argumentos)
 * @param   argumento1      argumento 1 de la función
 * @param   argumento2      argumento 2 de la función
 */
// setImmediate(function_name, argumento1, argumento2,...);

// Ejemplo

console.log(`Antes de llamar a setImmediate()`);

setImmediate(showTopic, "probando setImmediate");

console.log("Despues de llamar a setImmediate()");



/**
 * @brief   Se utiliza para ejecutar un código un número infinito
 *          de veces con un retraso específico de milisegundos
 * 
 * @param   function_name   Nombre de la función (sin sus argumentos)
 * @param   intervalo       Intervalo de repetición de llamada de función
 *                          en milisegundos
 * @param   argumento1      argumento 1 de la función
 * @param   argumento2      argumento 2 de la función
 */
// setInterval(function_name, intervalo, argumento1, argumento2,...);

// Ejemplo
setInterval(showTopic, 1000, `intento nro ${i}`);
