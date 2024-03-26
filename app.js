const os = require('os');

// Muestra el sistema operativo en uso
console.log(os.type()); // Output: Linux

// Directorio home
console.log(os.homedir()); // Output: /home/armando

// Tiempo de ejecución del OS en segundos
console.log(os.uptime()); // Output: /home/armando

// Muestra info basica de usuario y ejecución
console.log(os.userInfo());
// Output:
// {
//     uid: 1000,
//     gid: 1000,
//     username: 'armando',
//     homedir: '/home/armando',
//     shell: '/bin/bash'
// }