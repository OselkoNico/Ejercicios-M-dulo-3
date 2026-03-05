class Coche {
    marca: string = "Toyota";
    modelo: string = "xv35";
    año: number = 1996;
    mostrarInfo() {
       return `El coche es un ${this.marca} ${this.modelo} del ${this.año}`
    }
}

const miCoche = new Coche();
miCoche.mostrarInfo();