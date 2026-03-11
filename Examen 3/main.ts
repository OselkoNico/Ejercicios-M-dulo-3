interface Empleados {
  nombre: string,
  apellidos: string,
  email: string,
  nacimiento: string
}

class EmpleadosVentas implements Empleados {
    nombre: string;
    apellidos: string;
    email: string;
    nacimiento: string;
    unidadDeVenta: string;
    zonaGeografica: string;
            constructor(nombre: string, apellidos: string, email: string, nacimiento: string, unidadDeVenta: string, zonaGeografica: string){
            this.nombre = nombre
            this.apellidos = apellidos
            this.email = email
            this.nacimiento = nacimiento
            this.unidadDeVenta = unidadDeVenta
            this.zonaGeografica = zonaGeografica
        }
    getNombre(){
        return this.nombre
    }
    getApellidos(){
        return this.apellidos
    }
    setEmail(arroba: string){
        if (!arroba.includes("@")){
            throw new Error("Email no válido.")
        }
        this.email = arroba
    }
    getEmail(){
        return this.email
    }
    getNacimiento(){
        return this.nacimiento
    }
    setUnidadDeVenta(unidad: string){
        if (!unidad || unidad.trim().length === 0){
            throw new Error("La unidad de venta no puede estar vacía.")
        }
        this.unidadDeVenta = unidad
    }
    getUnidadDeVenta(){
        return this.unidadDeVenta
    }
    setZonaGeografica(zona: string){
        const zonas = ["norte", "sur", "este", "oeste"];
        if (zonas.includes(zona)){
            this.zonaGeografica = zona
        } else {
            throw new Error("Zona geográfica no válida.")
        }
    }
    getZonaGeografica(){
        return this.zonaGeografica
    }
}

function addEmployee(): {
    Empleado: string
    Correo: string
    Nacimiento: string
    Unidad: string
    Zona: string }
{
    let employeeName = (<HTMLInputElement>document.getElementById('name')).value;
    let surname = (<HTMLInputElement>document.getElementById('surname')).value;
    let email = (<HTMLInputElement>document.getElementById('email')).value;
    let birthDate = (<HTMLInputElement>document.getElementById('birthDate')).value;
    let sdUnit = (<HTMLInputElement>document.getElementById('sdUnit')).value;
    let area = (<HTMLInputElement>document.getElementById('area')).value;

    if(!employeeName || !surname || !email || !birthDate || !sdUnit || !area){
        throw new Error("Faltan datos.")
    } 
    const nuevoEmpleadoVentas = new EmpleadosVentas(employeeName, surname, email, birthDate, sdUnit, area);
    return {
        Empleado: `${nuevoEmpleadoVentas.getNombre()} ${nuevoEmpleadoVentas.getApellidos()}`,
        Correo: nuevoEmpleadoVentas.getEmail(),
        Nacimiento: nuevoEmpleadoVentas.getNacimiento(),
        Unidad: nuevoEmpleadoVentas.getUnidadDeVenta(),
        Zona: nuevoEmpleadoVentas.getZonaGeografica()
    }
}