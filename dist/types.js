"use strict";
// any: Permite qualquer tipo
let valor = 'Hello';
valor = 42;
// unknown: Similar ao any, mas exige checagem de tipo antes do uso
let unknownValue = 'World';
if (typeof unknownValue === 'string') {
    console.log(unknownValue.toUpperCase());
}
// never: Representa valores que nunca ocorrem, por exemplo erros
function throwError(message) {
    throw new Error(message);
}
let mixed = 'Hello';
mixed = 42;
const empregado = { name: 'Kainan', empregadoId: 10 };
const move = 'up';
const optionalUser = { id: 1 };
const pickedName = { name: 'Kainan' };
// Enum básico
var Colors;
(function (Colors) {
    Colors["Red"] = "RED";
    Colors["Green"] = "GREEN";
    Colors["Blue"] = "BLUE";
})(Colors || (Colors = {}));
const favoriteColor = Colors.Red;
console.log(`Minha cor favorita é: ${favoriteColor}`);
