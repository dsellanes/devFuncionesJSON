const fs = require('fs'); 
const obtenerModulos = require('./obtenerModulos');
 
const cubrimientoModulos = require('./cubrimientoModulos');

// Definimos y cagamos listas de jsons 
let jsons = [];

for (let i = 0; i < 20; i++) {
    let rawdata = fs.readFileSync(`./jsonfiles/u${i}.json`);
    jsons[i] = JSON.parse(rawdata);
}



// Llamada a funciones a implementar 
modulosRequeridos = obtenerModulos(jsons);

console.log('Modelos requeridos por usuarios: ')
console.log(modulosRequeridos);
console.log('Cubrimiento minimal de usuarios para todos los modulos: ')
console.log(cubrimientoModulos(modulosRequeridos));


