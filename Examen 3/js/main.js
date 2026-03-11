var EmpleadosVentas = /** @class */ (function () {
    function EmpleadosVentas(nombre, apellidos, email, nacimiento, unidadDeVenta, zonaGeografica) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.nacimiento = nacimiento;
        this.unidadDeVenta = unidadDeVenta;
        this.zonaGeografica = zonaGeografica;
    }
    EmpleadosVentas.prototype.getNombre = function () {
        return this.nombre;
    };
    EmpleadosVentas.prototype.getApellidos = function () {
        return this.apellidos;
    };
    EmpleadosVentas.prototype.setEmail = function (arroba) {
        if (!arroba.includes("@")) {
            throw new Error("Email no válido.");
        }
        this.email = arroba;
    };
    EmpleadosVentas.prototype.getEmail = function () {
        return this.email;
    };
    EmpleadosVentas.prototype.getNacimiento = function () {
        return this.nacimiento;
    };
    EmpleadosVentas.prototype.setUnidadDeVenta = function (unidad) {
        if (!unidad || unidad.trim().length === 0) {
            throw new Error("La unidad de venta no puede estar vacía.");
        }
        this.unidadDeVenta = unidad;
    };
    EmpleadosVentas.prototype.getUnidadDeVenta = function () {
        return this.unidadDeVenta;
    };
    EmpleadosVentas.prototype.setZonaGeografica = function (zona) {
        var zonas = ["norte", "sur", "este", "oeste"];
        if (zonas.includes(zona)) {
            this.zonaGeografica = zona;
        }
        else {
            throw new Error("Zona geográfica no válida.");
        }
    };
    EmpleadosVentas.prototype.getZonaGeografica = function () {
        return this.zonaGeografica;
    };
    return EmpleadosVentas;
}());
function addEmployee() {
    var employeeName = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var email = document.getElementById('email').value;
    var birthDate = document.getElementById('birthDate').value;
    var sdUnit = document.getElementById('sdUnit').value;
    var area = document.getElementById('area').value;
    if (!employeeName || !surname || !email || !birthDate || !sdUnit || !area) {
        throw new Error("Faltan datos.");
    }
    var nuevoEmpleadoVentas = new EmpleadosVentas(employeeName, surname, email, birthDate, sdUnit, area);
    return {
        Empleado: "".concat(nuevoEmpleadoVentas.getNombre(), " ").concat(nuevoEmpleadoVentas.getApellidos()),
        Correo: nuevoEmpleadoVentas.getEmail(),
        Nacimiento: nuevoEmpleadoVentas.getNacimiento(),
        Unidad: nuevoEmpleadoVentas.getUnidadDeVenta(),
        Zona: nuevoEmpleadoVentas.getZonaGeografica()
    };
}
