type Operacion = (a: number, b: number) => number;

const sumar: Operacion = (a, b) => a+b;
const restar: Operacion = (a, b) => a-b;
const multiplicar: Operacion = (a, b) => a*b;