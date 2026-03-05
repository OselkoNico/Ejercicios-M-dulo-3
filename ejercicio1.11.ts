interface Persona {
    nombre: string,
    edad: number,
    email: string
}


const p1: Persona = {
    nombre: "Ana",
    edad: 64,
    email: "example@email.com"
}

const p2: Persona = {
    nombre: "Juan",
    edad: 45,
    email: "example2@gmail.com"
}

interface Completo extends Persona {
    saludar(): string;
}

const p3: Completo = {
    nombre: "Filo",
    edad: 93,
    email: "example3@gmail.com",
    saludar() {
        return "Hola"
    }
}