var EmpleadoVentas = /** @class */ (function () {
    function EmpleadoVentas(nombre, apellidos, correo, nacimiento, unidadVenta, zonaGeografica) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.nacimiento = nacimiento;
        this.setCorreo(correo);
        this.setUnidadVenta(unidadVenta);
        this.setZonaGeografica(zonaGeografica);
    }
    EmpleadoVentas.prototype.getNombre = function () {
        return this.nombre;
    };
    EmpleadoVentas.prototype.getApellidos = function () {
        return this.apellidos;
    };
    EmpleadoVentas.prototype.setCorreo = function (minus) {
        this.correo = minus.trim().toLowerCase();
    };
    EmpleadoVentas.prototype.getCorreo = function () {
        return this.correo;
    };
    EmpleadoVentas.prototype.getNacimiento = function () {
        return this.nacimiento;
    };
    EmpleadoVentas.prototype.setUnidadVenta = function (minus) {
        this.unidadVenta = minus.trim().toLowerCase();
    };
    EmpleadoVentas.prototype.getUnidadVenta = function () {
        return this.unidadVenta;
    };
    EmpleadoVentas.prototype.setZonaGeografica = function (minus) {
        this.zonaGeografica = minus.trim().toLowerCase();
    };
    EmpleadoVentas.prototype.getZonaGeografica = function () {
        return this.zonaGeografica;
    };
    return EmpleadoVentas;
}());
function addEmployee() {
    var employeeName = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var email = document.getElementById('email').value;
    var birthDate = document.getElementById('birthDate').value;
    var sdUnit = document.getElementById('sdUnit').value;
    var area = document.getElementById('area').value;
    var errores = [];
    if (!employeeName) {
        errores.push("Falta nombre.");
    }
    if (!surname) {
        errores.push("Falta apellidos.");
    }
    if (!email || !email.includes("@")) {
        errores.push("Falta email / email no válido.");
    }
    if (!birthDate) {
        errores.push("Falta fecha de nacimiento.");
    }
    if (!sdUnit) {
        errores.push("Falta unidad de venta.");
    }
    var zonas = ["norte", "sur", "este", "oeste"];
    if (!zonas.includes(area.toLowerCase())) {
        errores.push("Falta zona geográfica / zona no válida.");
    }
    if (errores.length > 0) {
        console.error("Errores en el formulario:");
        errores.forEach(function (e) { return console.error(e); });
        return;
    }
    var nuevoEmpleadoVentas = new EmpleadoVentas(employeeName, surname, email, birthDate, sdUnit, area);
    console.log("Nuevo empleado creado con éxito:", nuevoEmpleadoVentas);
}
