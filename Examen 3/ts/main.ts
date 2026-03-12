interface Empleado {
    nombre: string
    apellidos: string
    correo: string
    nacimiento: string
}

class EmpleadoVentas implements Empleado {
    nombre: string;
    apellidos: string;
    correo!: string;
    nacimiento: string;
    unidadVenta!: string;
    zonaGeografica!: string;
        constructor(
            nombre: string,
            apellidos: string,
            correo: string,
            nacimiento: string,
            unidadVenta: string,
            zonaGeografica: string){
                this.nombre = nombre
                this.apellidos = apellidos
                this.nacimiento = nacimiento
                
                this.setCorreo(correo)
                this.setUnidadVenta(unidadVenta)
                this.setZonaGeografica(zonaGeografica)
            }
        getNombre(){
            return this.nombre
        }
        getApellidos(){
            return this.apellidos
        }
        setCorreo(minus: string){
            this.correo = minus.trim().toLowerCase()
        }
        getCorreo(){
            return this.correo
        }
        getNacimiento(){
            return this.nacimiento
        }
        setUnidadVenta(minus: string){
            this.unidadVenta = minus.trim().toLowerCase()
        }
        getUnidadVenta(){
            return this.unidadVenta
        }
        setZonaGeografica(minus: string){
            this.zonaGeografica = minus.trim().toLowerCase()
        }
        getZonaGeografica(){
            return this.zonaGeografica
        }
}

function addEmployee(): void {
    let employeeName = (<HTMLInputElement>document.getElementById('name')).value;
    let surname = (<HTMLInputElement>document.getElementById('surname')).value;
    let email = (<HTMLInputElement>document.getElementById('email')).value;
    let birthDate = (<HTMLInputElement>document.getElementById('birthDate')).value;
    let sdUnit = (<HTMLInputElement>document.getElementById('sdUnit')).value;
    let area = (<HTMLInputElement>document.getElementById('area')).value;
    
    const errores: string[] = []

    if(!employeeName){
        errores.push("Falta nombre.")
    }
    if(!surname){
        errores.push("Falta apellidos.")
    }
    if(!email || !email.includes("@")){
        errores.push("Falta email / email no válido.")
    }
    if(!birthDate){
        errores.push("Falta fecha de nacimiento.")
    }
    if(!sdUnit){
        errores.push("Falta unidad de venta.")
    }
    const zonas = ["norte", "sur", "este", "oeste"]
    if(!zonas.includes(area.toLowerCase())){
        errores.push("Falta zona geográfica / zona no válida.")
    }
    if(errores.length>0){
        console.error("Errores en el formulario:")
        errores.forEach(e=> console.error(e))
        return
    }

    const nuevoEmpleadoVentas = new EmpleadoVentas(
        employeeName, 
        surname, 
        email, 
        birthDate, 
        sdUnit, 
        area);

    console.log("Nuevo empleado creado con éxito:", nuevoEmpleadoVentas)
}