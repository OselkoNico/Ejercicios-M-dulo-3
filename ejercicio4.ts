// 1

type Id = number;

let usuarioId: Id = 10;

// 2

type Producto = {
 id: number,
 nombre: string,
 precio: number
};

const producto1: Producto = { id: 10, nombre: "Osel", precio: 30 };

// 3

type EstadoPedido = "Pentiente" | "Enviado" | "Entregado";

let estadoEntregado: EstadoPedido = "Entregado";

// 4

type Resultado = number | string;

let resultado1: Resultado = "12";

// 5

type Persona = { nombre: string }
type Empleado = { empresa: string }

type Trabajador = Persona & Empleado;

const trabajado1: Trabajador = { nombre: "Osel", empresa: "Amazon" };

// 6

type Operacion = (a: number, b: number) => number;

const multiplicar: Operacion = (a, b) => a*b;

// 7

type Boton = { tipo: "link"; href: string } | { tipo: "button"; onClick: () => void };

const botonLink: Boton = { tipo: "link", href: "https://example.com" };
const botonButton: Boton = { tipo: "button", onClick: () => console.log("Click!") };