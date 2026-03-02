interface Persona {
    nombre: string;
    edad: number;
    esEstudiante: boolean;
}

function presentarse(persona: Persona): void {
    console.log(`Hola, soy ${persona.nombre}, tengo ${persona.edad} y ${persona.esEstudiante ? "soy estudiante" : "no soy estudiante"}`);
};

const persona1: Persona = {
    nombre: "Osel",
    edad: 29,
    esEstudiante: false,
}


presentarse(persona1);