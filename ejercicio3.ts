interface Persona {
    nombre: string;
    edad: number;
    esEstudiante: boolean;
}

let personas: Persona[] = [
    { nombre: "Ana", edad: 22, esEstudiante: true },
    { nombre: "Luis", edad: 28, esEstudiante: false },
    { nombre: "Marta", edad: 19, esEstudiante: true }
];

function presentarLista(personas: Persona[]): void {
    personas.forEach(persona => {
        console.log(`Hola, soy ${persona.nombre}, tengo ${persona.edad} y ${persona.esEstudiante ? "soy estudiante" : "no soy estudiante"}`);
    });
}

presentarLista(personas);