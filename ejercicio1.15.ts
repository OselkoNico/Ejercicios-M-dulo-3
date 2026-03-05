class Animal {
    nombre: string;
    constructor(nombre: string){
        this.nombre = nombre;
    }
    hacerSonido(){};
}

class Perrito extends Animal {
    hacerSonido(): string {
            return "guau";
        }
    }

class Gatito extends Animal {
    hacerSonido(): string {
        return "miau"
    }
}