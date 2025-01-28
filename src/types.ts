// any: Permite qualquer tipo
let valor: any = 'Hello';
valor = 42;

// unknown: Similar ao any, mas exige checagem de tipo antes do uso
let unknownValue: unknown = 'World';
if (typeof unknownValue === 'string') {
  console.log(unknownValue.toUpperCase());
}

// never: Representa valores que nunca ocorrem, por exemplo erros
function throwError(message: string): never {
  throw new Error(message);
}

// Union
type StringOrNumber = string | number;
let mixed: StringOrNumber = 'Hello';
mixed = 42;

// Intersection
type Pessoa = { name: string };
type Empregado = { empregadoId: number };
type EmpregadoDetails = Pessoa & Empregado;
const empregado: EmpregadoDetails = { name: 'Kainan', empregadoId: 10 };

// Literal Types
type Direction = 'left' | 'right' | 'up' | 'down';
const move: Direction = 'up';

// Tipos mapeados
type Optional<T> = { [K in keyof T]?: T[K] };
type User = { id: number; name: string; age: number };
const optionalUser: Optional<User> = { id: 1 };

// Utilitários
type PickName = Pick<User, 'name'>;
const pickedName: PickName = { name: 'Kainan' };

// Enum básico
enum Colors {
  Red = 'RED',
  Green = 'GREEN',
  Blue = 'BLUE',
}

const favoriteColor: Colors = Colors.Red;
console.log(`Minha cor favorita é: ${favoriteColor}`);
