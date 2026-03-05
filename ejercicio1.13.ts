class Coche {
    marca: string = "Toyota";
    modelo: string = "xv35";
    año: number = 1996;
    private kilometros: number = 128000;
    mostrarInfo() {
       return `El coche es un ${this.marca} ${this.modelo} del ${this.año}`
    }
    conducir(km: number){
        this.kilometros += km;
    }
}

const contadorKilometros = new Coche();
contadorKilometros.conducir(5000);